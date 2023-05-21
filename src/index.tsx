import {registerPlugin} from 'enmity/managers/plugins'
import {Navigation, React, Toasts, Scenes} from 'enmity/metro/common'
import {create} from 'enmity/patcher'

// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import {checkPluginDatabaseVer, checkThemeDatabaseVer} from "./utils/fetch"
import {checkAddonUpdate} from "./utils/update"
import "./utils/native"
import {Home, HomeStack} from "./components/Home"
import {installPlugin, installTheme, resetCachedUpdated} from "./utils/addon"
import {ApplicationCommandType, Command} from "enmity/api/commands"
import {bulk, filters, getByName} from "enmity/metro"
import Page from "./components/Page"
import {getByProps} from "enmity/modules"
import {getIDByName} from "enmity/api/assets"
import {get, set} from "enmity/api/settings"
import {checkUpdate} from "./utils/updater"
import {findInReactTree} from "enmity/utilities"
import {FormArrow, FormDivider, FormRow} from "enmity/components"
import {Icons} from "./utils/common";
import {patchActionSheet} from "../../hook";

const [
    Messages,
    MessagesWrapper,
    PrivateChannelActions,
    SettingsView,
    RouteUtils,
    LazyActionSheet
] = bulk(
    filters.byName('MessagesConnected', false),
    filters.byName('MessagesWrapperConnected', false),
    filters.byProps("openPrivateChannel"),
    filters.byName("UserSettingsOverviewWrapper", false),
    filters.byProps("transitionTo"),
    filters.byProps("openLazy", "hideActionSheet")
)

const {Platform: {isPad}} = getByProps("View", "Text")
let doTransition = false
const InfoIcon = getIDByName("ic_information_24px")
const privateChannelId = "643945264868098049" // our beloved, Discord

function burnIpad() {
    Toasts.open({
        content: `nvm. It is the normal behaviour on iPad as of now.`,
        source: InfoIcon
    })
    doTransition = true
    RouteUtils.transitionTo("/channels/@me", undefined) // in the case DM is already opened
    PrivateChannelActions.openPrivateChannel(privateChannelId)
}

const Patcher = create('AddonManager')

const AddonManager = {
    ...manifest,
    onStart() {
        // define commands
        const addon: Command = {
            id: "addon",
            name: "addon",
            displayName: "addon",
            description: "Open AddonManager",
            displayDescription: "Open AddonManager",
            type: ApplicationCommandType.Chat,
            execute: async function (args, message) {
                if (isPad) burnIpad()
                else Navigation.push(Page, {component: HomeStack, name: "AddonManager"})
            }
        }
        this.commands = [addon]

        // patch the long press action sheet
        patchActionSheet(Patcher, "LongPressUrl", (args, res) => {
            if (get(plugin_name, "long_press_downloader", true)) {
                let url = args[0].header.title
                // avoid pushing it multiple times
                if (args[0].options.filter(item=>item.label.includes("Download")).length) return
                if (url.startsWith("http")) {
                    if (url.endsWith(".js")) {
                        let name = url.split("/").slice(-1)[0].replace(".js", "")
                        args[0].options.unshift({
                            label: "Download as a plugin",
                            onPress: () => {
                                installPlugin(name, url)
                                LazyActionSheet.hideActionSheet()
                            }
                        })
                    } else if (url.endsWith(".json")) {
                        let name = url.split("/").slice(-1)[0].replace(".json", "")
                        args[0].options.unshift({
                            label: "Download as a theme",
                            onPress: () => {
                                installTheme(name, url)
                                LazyActionSheet.hideActionSheet()
                            }
                        })
                    }
                }
            }
        }, true)

        // patch settings
        const unpatch = Patcher.after(SettingsView, 'default', (_, __, ret) => {
            const Overview = findInReactTree(ret, m => m.type?.name === 'UserSettingsOverview')
            Patcher.after(Overview.type.prototype, 'render', ({props: {navigation}}, __, res) => {
                const Enmity = findInReactTree(res, m => m.key === "Enmity")
                const AddonManagerRow = findInReactTree(res, m => m.label === "AddonManager") // avoid pushing it multiple times
                if (!AddonManagerRow && get(plugin_name, "add_to_settings", true)) {
                    Enmity.props.children.push(
                        <FormDivider/>,
                        <FormRow
                            label='AddonManager'
                            leading={<FormRow.Icon source={Icons.SettingIcon}/>}
                            trailing={<FormArrow/>}
                            onPress={() => {
                                if (isPad) {
                                    Navigation.pop()
                                    burnIpad()
                                } else {
                                    navigation.push('AddonManager', {navigation})
                                }
                            }}
                        />
                    )
                }
                unpatch()
            })
        })
        Patcher.after(Scenes, 'default', (_, __, res) => {
            return {
                ...res,
                AddonManager: {
                    key: 'AddonManager',
                    title: 'AddonManager',
                    render: () => <HomeStack/>
                }
            }
        })

        // hacky patch for ipads to take over DM
        const Messages_ = Messages ? Messages : MessagesWrapper  // MessagesWrapper : 163+ / Messages : 162-
        Patcher.after(Messages_, 'default', (self, args, org) => {
            if (doTransition && args[0].channel?.recipients?.includes(privateChannelId)) {
                return <HomeStack/>
            } else { // unlock this state after the user goes to somewhere else (re-render may revert it if I put it into the above block)
                doTransition = false
            }
        })
        // check updates of the plugin itself
        if (get(plugin_name, "check_updates_me", true)) {
            if (get(plugin_name, "_updating", false)) {
                set(plugin_name, "_updating", false)
            } else {
                checkUpdate()
            }
        }
        // reset internal state
        let addons = ["plugin", "theme"]
        addons.forEach(addonType => resetCachedUpdated(addonType))
        // update internal assets
        checkPluginDatabaseVer()
        checkThemeDatabaseVer()
        // check updates of installed addons
        checkAddonUpdate()
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        if (isPad) {
            Navigation.pop()
            burnIpad()
        }
        return <Home settings={settings}/>
    }
}

registerPlugin(AddonManager)
