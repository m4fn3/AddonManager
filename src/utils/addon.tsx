import {Toasts} from "enmity/metro/common"
import {getIDByName} from "enmity/api/assets"
import {get, set} from "enmity/api/settings";
// @ts-ignore
import {name} from '../../manifest.json'
import {Icons} from "./common"

function installPlugin(name, url, callback = () => {
}) {
    // @ts-ignore
    window.enmity.plugins.installPlugin(url, (data) => {
        if (data.name === undefined) {
            Toasts.open({
                content: `Failed to install ${name}`,
                source: Icons.Fail
            })
        } else {
            Toasts.open({
                content: `Successfully installed ${name}!`,
                source: Icons.Check
            })
            callback()
        }
    })
}

function uninstallPlugin(name, callback = () => {
}) {
    // @ts-ignore
    window.enmity.plugins.uninstallPlugin(name, (data) => {
        Toasts.open({
            content: `Successfully uninstalled ${name}!`,
            source: Icons.Check
        })
        callback()
    })
}

function installTheme(name, url, callback = () => {
}) {
    // @ts-ignore
    window.enmity.themer.installTheme(url, (data) => {
        Toasts.open({
            content: `Successfully installed ${name}!`,
            source: Icons.Check
        })
        callback()
    })
}

function uninstallTheme(name, callback = () => {
}) {
    // @ts-ignore
    window.enmity.themer.uninstallTheme(name, (data) => {
        Toasts.open({
            content: `Successfully uninstalled ${name}!`,
            source: Icons.Check
        })
        callback()
    })
}

function getTheme(name) {
    // @ts-ignore
    return window.enmity.themer.getThemeByName(name)
}

function getThemes() {
    // @ts-ignore
    return window.enmity.themer.listThemes()
}

function getThemeColors(tag) {
    try {
        // @ts-ignore
        let Theme = getTheme(window.enmity.themer.getTheme())
        return Theme ? Theme.colours[tag] : undefined
    } catch (e) {
        return undefined
    }
}

function addCachedUpdated(addonType, name) {
    let updated = getCachedUpdated("plugin")
    updated.push(name)
    set(name, `_updated_${addonType}s`, JSON.stringify(updated))
}

function getCachedUpdated(addonType) {
    return JSON.parse(get(name, `_updated_${addonType}s`, "{}").toString())
}


export {installPlugin, installTheme, getTheme, getThemes, uninstallPlugin, uninstallTheme, getThemeColors, getCachedUpdated, addCachedUpdated}