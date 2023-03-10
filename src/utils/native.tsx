// native.ts from enmity
// https://github.com/enmity-mod/enmity/blob/main/src/modules/native.ts

import {Linking} from 'enmity/metro/common'
import {get} from "enmity/api/settings"

import {createExportText} from "../components/Export"
import {setNote} from "./note"
// @ts-ignore
import {name as plugin_name} from "../../manifest.json"

// @ts-ignore
Linking.addEventListener('url', (url) => {
    let responseUrl = url.url
    responseUrl = decodeURIComponent(responseUrl.replace('com.hammerandchisel.discord://', ''))
    try {
        const response = JSON.parse(responseUrl)
        if (get(plugin_name, "auto_backup") && typeof response.data === "string" && ['installed_theme', 'overridden_theme', 'installed_plugin', 'overridden_plugin'].includes(response.data)) {
            setNote("1048982327809818706", createExportText())
        }
    } catch (e) {
        return
    }
})
