import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'

import addon from "./components/Commands"

// @ts-ignore
import manifest, {name} from '../manifest.json'
import Settings from './components/Settings'
import {checkPluginDatabaseVer, checkThemeDatabaseVer} from "./utils/fetch"
import {checkUpdate} from "./utils/update"

const Patcher = create('AddonManager')

const AddonManager: Plugin = {
    ...manifest,

    onStart() {
        this.commands = [addon]

        checkPluginDatabaseVer()
        checkThemeDatabaseVer()
        checkUpdate()
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(AddonManager)
