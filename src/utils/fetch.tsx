import {REST} from 'enmity/metro/common'
import {get, set} from 'enmity/api/settings'
// @ts-ignore
import {name as plugin_name} from '../../manifest.json'

const rawURL = "https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/"
// const rawURL = "https://raw.githubusercontent.com/m4fn3/Test/master/"
const pluginDatabaseURL = rawURL + "plugins.json"
const themeDatabaseURL = rawURL + "themes.json"
const pluginDatabaseVerURL = rawURL + "plugins_update.txt"
const themeDatabaseVerURL = rawURL + "themes_update.txt"
const compatibilityURL = rawURL + "compatibility.json"

function randomizeURL(url) {
    return `${url}?${Date.now()}`
}

function getDetailURL(addonType, name){
    return `${rawURL}${addonType}s/${name}.json`
}

function parseDatabase(name){
    try {
        return JSON.parse(get(plugin_name, name, "{}").toString())
    } catch {
        return {}
    }
}

function getPluginDatabase() {
    return parseDatabase("plugins")
}

function getThemeDatabase() {
    return parseDatabase("themes")
}

function getCompatibility(){
    return parseDatabase("compatibility")
}

function fetchPluginDatabase() {
    REST.get(randomizeURL(pluginDatabaseURL)).then(databaseRaw => {
        set(plugin_name, "plugins", databaseRaw.text)
    })
}

function fetchThemeDatabase() {
    REST.get(randomizeURL(themeDatabaseURL)).then(databaseRaw => {
        set(plugin_name, "themes", databaseRaw.text)
    })
}

function checkPluginDatabaseVer() {
    REST.get(randomizeURL(pluginDatabaseVerURL)).then(verRaw => {
        let ver = verRaw.text
        let plugins_ver = get(plugin_name, "plugins_ver")
        if (plugins_ver) {
            if (plugins_ver != ver) { // 更新がある場合
                set(plugin_name, "plugins_ver", ver)
                fetchPluginDatabase()
            }
        } else {  // 初回
            set(plugin_name, "plugins_ver", ver)
            fetchPluginDatabase()
        }
    })
}

function checkThemeDatabaseVer() {
    REST.get(randomizeURL(themeDatabaseVerURL)).then(verRaw => {
        let ver = verRaw.text
        let themes_ver = get(plugin_name, "themes_ver")
        if (themes_ver) {
            if (themes_ver != ver) { // 更新がある場合
                set(plugin_name, "themes_ver", ver)
                fetchThemeDatabase()
            }
        } else {
            set(plugin_name, "themes_ver", ver)
            fetchThemeDatabase()
        }
    })
}

export {fetchPluginDatabase, fetchThemeDatabase, checkPluginDatabaseVer, checkThemeDatabaseVer, getPluginDatabase, getThemeDatabase, randomizeURL, getDetailURL, compatibilityURL, getCompatibility}