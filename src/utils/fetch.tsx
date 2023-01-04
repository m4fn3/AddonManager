import {REST} from 'enmity/metro/common'
import {get, set} from 'enmity/api/settings'
// @ts-ignore
import {name} from '../../manifest.json'

const pluginDatabaseURL = "https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/plugins.json"
const themeDatabaseURL = "https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/themes.json"
const pluginDatabaseVerURL = "https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/plugins_update.txt"
const themeDatabaseVerURL = "https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/themes_update.txt"

function getPluginDatabase(){
    return JSON.parse(get(name, "plugins", "{}").toString())
}

function getThemeDatabase(){
    return JSON.parse(get(name, "themes", "{}").toString())
}

function fetchPluginDatabase() {
    REST.get(pluginDatabaseURL).then(databaseRaw => {
        set(name, "plugins", databaseRaw.text)
    })
}

function fetchThemeDatabase() {
    REST.get(themeDatabaseURL).then(databaseRaw => {
        set(name, "themes", databaseRaw.text)
    })
}

function checkPluginDatabaseVer(){
    REST.get(pluginDatabaseVerURL).then(verRaw => {
        let ver = verRaw.text
        let plugins_ver = get(name, "plugins_ver")
        if (plugins_ver){
            if (plugins_ver != ver){ // 更新がある場合
                set(name, "plugins_ver", ver)
                fetchPluginDatabase()
            }
        } else {  // 初回
            set(name, "plugins_ver", ver)
            fetchPluginDatabase()
        }
    })
}

function checkThemeDatabaseVer(){
    REST.get(themeDatabaseVerURL).then(verRaw => {
        let ver = verRaw.text
        let themes_ver = get(name, "themes_ver")
        if (themes_ver){
            if (themes_ver != ver){ // 更新がある場合
                set(name, "themes_ver", ver)
                fetchThemeDatabase()
            }
        } else {
            set(name, "themes_ver", ver)
            fetchThemeDatabase()
        }
    })
}

export {fetchPluginDatabase, fetchThemeDatabase, checkPluginDatabaseVer, checkThemeDatabaseVer, getPluginDatabase, getThemeDatabase}