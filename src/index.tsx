import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name} from '../manifest.json'

import Settings from './components/Settings'
import {checkUpdate} from "../../K2geLocker/src/utils/update";
import {get, set} from "enmity/api/settings";

const Patcher = create('AddonStore')

function initVariable(valName, defVal, force = false) {
    if (force) {
        set(name, valName, defVal)
    } else if (get(name, valName) === undefined) {
        set(name, valName, defVal)
    }
}

const AddonStore: Plugin = {
    ...manifest,

    onStart() {
        const metas = [["check_updates", true]]
        metas.forEach((meta) => {
            // @ts-ignore
            initVariable(...meta)
        })

        if (get(name, "check_updates")) {
            if (get(name, "_updating")) { // アップデート中はチェックを飛ばす
                set(name, "_updating", false) // Updateを押した後にCancelした場合はinstallPluginのCallbackが呼ばれないためここでオフにする
            } else {
                checkUpdate()
            }
        }
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(AddonStore)
