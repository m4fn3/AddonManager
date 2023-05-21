// native.ts from enmity
// https://github.com/enmity-mod/enmity/blob/main/src/modules/native.ts

import {Linking} from 'enmity/metro/common'
import {get} from "enmity/api/settings"

// @ts-ignore
import {name as plugin_name} from "../../manifest.json"
import {createBackup} from "./note"

// @ts-ignore
Linking.addEventListener('url', (url) => {
    let responseUrl = url.url
    responseUrl = decodeURIComponent(responseUrl.replace('com.hammerandchisel.discord://', ''))
    try {
        const response = JSON.parse(responseUrl)
        if (get(plugin_name, "auto_backup") && typeof response.data === "string" && ['installed_theme', 'overridden_theme', 'installed_plugin', 'overridden_plugin'].includes(response.data)) {
            createBackup()
        }
    } catch (e) {
        return
    }
})
