import {registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'

// @ts-ignore
import manifest from '../manifest.json'
import {checkPluginDatabaseVer, checkThemeDatabaseVer} from "./utils/fetch"
import {checkUpdate} from "./utils/update"
import "./utils/native"
import {Home} from "./components/Home"
import {resetCachedUpdated} from "./utils/addon"
import addon from "./components/Commands"

const Patcher = create('AddonManager')

const AddonManager = {
    ...manifest,

    onStart() {
        this.commands = [addon]

        let addons = ["plugin", "theme"]
        addons.forEach(addonType => resetCachedUpdated(addonType))

        checkPluginDatabaseVer()
        checkThemeDatabaseVer()
        checkUpdate()
    },
    onStop() {
        Patcher.unpatchAll()
    },
    renderPage(navigation, { pageName, pagePanel }) {
        return navigation?.push?.("EnmityCustomPage", {
            pageName,
            pagePanel
        })
    },
    getSettingsPanel({settings}) {
        return <Home settings={settings} renderPage={AddonManager.renderPage} />
    }
}

registerPlugin(AddonManager)
