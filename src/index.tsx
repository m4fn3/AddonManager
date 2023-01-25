import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {Navigation, React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'

import addon from "./components/Commands"

// @ts-ignore
import manifest from '../manifest.json'
import {checkPluginDatabaseVer, checkThemeDatabaseVer} from "./utils/fetch"
import {checkUpdate} from "./utils/update"
import "./utils/native"
import {HomeStack} from "./components/Home"
import {resetCachedUpdated} from "./utils/addon"

const Patcher = create('AddonManager')

const AddonManager: Plugin = {
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
    getSettingsPanel({settings}) {
        return <HomeStack/>
    }
}

registerPlugin(AddonManager)
