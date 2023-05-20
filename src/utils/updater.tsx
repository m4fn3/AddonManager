import {REST, Dialog, Linking} from 'enmity/metro/common'
import {getPlugin} from 'enmity/managers/plugins'
import {get, set} from "enmity/api/settings"
import {reload} from "enmity/api/native"

// @ts-ignore
import {name} from '../../manifest.json'

const repoURL = "https://github.com/m4fn3/AddonManager"
const manifestURL = "https://raw.githubusercontent.com/m4fn3/AddonManager/master/manifest.json"
const installURL = "https://raw.githubusercontent.com/m4fn3/AddonManager/master/dist/AddonManager.js"
const changelogURL = "https://raw.githubusercontent.com/m4fn3/AddonManager/master/changelogs.json"


function updatePlugin(from, to) {
    // @ts-ignore
    window.enmity.plugins.installPlugin(installURL, () => {
        Dialog.show({
            title: "AddonManager",
            body: `Updated from ${from} to ${to}!\nDo you want to reload Discord now?`,
            confirmText: "Yes",
            cancelText: "Later",
            onConfirm: () => reload()
        })
    })
}


function checkUpdate(forceUpdate = false) {
    REST.get(manifestURL).then(manifestRaw => {
        const manifest = JSON.parse(manifestRaw.text)
        const plugin = getPlugin(manifest.name)
        if (manifest.version.localeCompare(plugin.version, undefined, {numeric: true}) === 1) {
            if (forceUpdate || (!forceUpdate && get(name, "ignored") != manifest.version)) {
                REST.get(changelogURL).then(changelogRaw => {
                    const changelogs = JSON.parse(changelogRaw.text)
                    let changes = ""
                    if (changelogs[manifest.version]){
                        changes = `\n\n- Changelogs\n${changelogs[manifest.version]}`
                    }
                    Dialog.show({
                        title: "AddonManager",
                        body: `New version v${manifest.version} is available!${changes}`,
                        confirmText: "Update",
                        cancelText: "Ignore",
                        onConfirm: () => {
                            set(name, "_updating", true)
                            updatePlugin(plugin.version, manifest.version)
                        },
                        onCancel: () => set(name, "ignored", manifest.version)
                    })
                })
            }
        } else if (forceUpdate) {
            Dialog.show({
                title: "AddonManager",
                body: `You are using latest version v${plugin.version}!`,
                confirmText: "OK"
            })
        }
    }).catch(response => {
        if (response.status === 404) {
            Dialog.show({
                title: "AddonManager",
                body: "Failed to check for updates. Please check GitHub manually.",
                confirmText: "GitHub",
                cancelText: "Close",
                onConfirm: () => Linking.openURL(repoURL),
            })
        }
    })
}

export {checkUpdate}