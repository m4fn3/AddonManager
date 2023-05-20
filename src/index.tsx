import {registerPlugin} from 'enmity/managers/plugins'
import {Navigation, React, Toasts} from 'enmity/metro/common'
import {create} from 'enmity/patcher'

// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import {checkPluginDatabaseVer, checkThemeDatabaseVer} from "./utils/fetch"
import {checkAddonUpdate} from "./utils/update"
import "./utils/native"
import {Home, HomeStack} from "./components/Home"
import {resetCachedUpdated} from "./utils/addon"
import {ApplicationCommandType, Command} from "enmity/api/commands"
import {bulk, filters} from "enmity/metro"
import Page from "./components/Page"
import {getByProps} from "enmity/modules"
import {getIDByName} from "enmity/api/assets"
import {get, set} from "enmity/api/settings"
import {checkUpdate} from "./utils/updater"

const [
    Messages,
    MessagesWrapper,
    PrivateChannelActions
] = bulk(
    filters.byName('MessagesConnected', false),
    filters.byName('MessagesWrapperConnected', false),
    filters.byProps("openPrivateChannel")
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
    setTimeout(() => {
        PrivateChannelActions.openPrivateChannel(privateChannelId)
    }, 100)
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
        if (get(plugin_name, "check_updates_me")) {
            if (get(plugin_name, "_updating")) {
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
    renderPage(navigation, {pageName, pagePanel}) {
        return navigation?.push?.("EnmityCustomPage", {
            pageName,
            pagePanel
        })
    },
    getSettingsPanel({settings}) {
        if (isPad) {
            Navigation.pop()
            burnIpad()
        }
        return <Home settings={settings} renderPage={AddonManager.renderPage}/>
    }
}

registerPlugin(AddonManager)
