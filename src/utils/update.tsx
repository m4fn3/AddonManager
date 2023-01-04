import {get, set} from "enmity/api/settings"

// @ts-ignore
import {name} from '../../manifest.json'
import {getPluginDatabase, getThemeDatabase} from "./fetch";
import {getPlugin, getPlugins} from "enmity/managers/plugins";
import {getTheme, getThemes} from "./addon";
import {Toasts} from "enmity/metro/common";
import {getIDByName} from "enmity/api/assets";

const DownloadIcon = getIDByName('ic_download_24px')

function checkUpdate() {
    let val = get(name, "check_updates")
    if (val === undefined) {
        set(name, "check_updates", false)
    } else if (val) {
        const plugins = getPluginDatabase()
        const themes = getThemeDatabase()
        let updatablePlugins = getUpdatablePlugins(plugins)
        let updatableThemes = getUpdatableThemes(themes)
        if (updatablePlugins.length || updatableThemes.length) {
            let updatableAddons = updatablePlugins.concat(updatableThemes)
            let text = updatableAddons.join(", ")
            Toasts.open({
                content: `Updates are available for ${text}`,
                source: DownloadIcon
            })
        }
    }
}

function isUpdate(from, to) {
    return to.localeCompare(from, undefined, {numeric: true}) === 1
}

function getUpdatablePlugins(plugins) {
    const installedPlugins = getPlugins().map((plugin) => plugin.name)
    // バージョンを比較してアップデート可能なプラグインのリストを取得する - dbに存在することを確認,versionがない場合もあるのであることを先に確認
    return installedPlugins.filter((name) => Object.keys(plugins).includes(name) && Object.keys(plugins[name]).includes("version") && getPlugin(name).version && isUpdate(getPlugin(name).version, plugins[name].version))
}

function getUpdatableThemes(themes) {
    const installedThemes = getThemes().map((theme) => theme.name)
    return installedThemes.filter((name) => Object.keys(themes).includes(name) && Object.keys(themes[name]).includes("version") && getTheme(name).version && isUpdate(getTheme(name).version, themes[name].version))
}

export {checkUpdate, getUpdatablePlugins, getUpdatableThemes}