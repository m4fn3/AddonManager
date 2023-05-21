import {Token} from "enmity/metro/common"
import {getByProps} from "enmity/metro"
import {createExportText} from "../components/Export"
import {getPlugins} from "enmity/managers/plugins"
import {getThemes} from "./addon"

const NoteStore = getByProps("updateNote")

async function fetchNote(userId) {
    let res = await fetch(`https://discord.com/api/v9/users/@me/notes/${userId}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "authorization": Token.getToken()
        }
    })
    let data = await res.json()
    return Object.keys(data).includes("note") ? data.note : ""
}

function setNote(userId, text){
    NoteStore.updateNote(userId, text)
}

function createBackup(){
    setNote("1048982327809818706", createExportText())
}

async function getBackup(){
    return fetchNote("1048982327809818706")
}

function createExportText() {
    let plugins = getPlugins().map((plugin) => plugin.name).join(";")
    // @ts-ignore
    let themes = getThemes().map((theme) => theme.name).join(";")
    return `${plugins}|${themes}`
}


export {createBackup, getBackup, createExportText}