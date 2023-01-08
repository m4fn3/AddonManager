import {REST} from 'enmity/metro/common'
import {get, set} from 'enmity/api/settings'
// @ts-ignore
import {name} from '../../manifest.json'

// const rawURL = "http://192.168.11.9:8000/" // Test
const rawURL = "https://raw.githubusercontent.com/m4fn3/AddonManagerDatabase/master/"
const pluginDatabaseURL = rawURL + "plugins.json"
const themeDatabaseURL = rawURL + "themes.json"
const pluginDatabaseVerURL = rawURL + "plugins_update.txt"
const themeDatabaseVerURL = rawURL + "themes_update.txt"

function randomize(url) {
    return `${url}?${Date.now()}`
}

function getPluginDatabase() {
    return JSON.parse(get(name, "plugins", "{}").toString())
}

function getThemeDatabase() {
    return JSON.parse(get(name, "themes", "{}").toString())
}

function fetchPluginDatabase() {
    REST.get(randomize(pluginDatabaseURL)).then(databaseRaw => {
        set(name, "plugins", databaseRaw.text)
    })
}

function fetchThemeDatabase() {
    REST.get(randomize(themeDatabaseURL)).then(databaseRaw => {
        set(name, "themes", databaseRaw.text)
    })
}

function checkPluginDatabaseVer() {
    REST.get(randomize(pluginDatabaseVerURL)).then(verRaw => {
        let ver = verRaw.text
        let plugins_ver = get(name, "plugins_ver")
        if (plugins_ver) {
            if (plugins_ver != ver) { // 更新がある場合
                set(name, "plugins_ver", ver)
                fetchPluginDatabase()
            }
        } else {  // 初回
            set(name, "plugins_ver", ver)
            fetchPluginDatabase()
        }
    })
}

function checkThemeDatabaseVer() {
    REST.get(randomize(themeDatabaseVerURL)).then(verRaw => {
        let ver = verRaw.text
        let themes_ver = get(name, "themes_ver")
        if (themes_ver) {
            if (themes_ver != ver) { // 更新がある場合
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