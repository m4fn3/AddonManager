import {Toasts} from "enmity/metro/common"
import {getIDByName} from "enmity/api/assets"

const FailIcon = getIDByName('Small')
const CheckIcon = getIDByName('ic_check_24px')


function installPlugin(name, url, callback = () => {
}) {
    // @ts-ignore
    window.enmity.plugins.installPlugin(url, (data) => {
        if (data.name === undefined) {
            Toasts.open({
                content: `Failed to install ${name}`,
                source: FailIcon
            })
        } else {
            Toasts.open({
                content: `Successfully installed ${name}!`,
                source: CheckIcon
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
            source: CheckIcon
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
            source: CheckIcon
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
            source: CheckIcon
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

export {installPlugin, installTheme, getTheme, getThemes, uninstallPlugin, uninstallTheme}