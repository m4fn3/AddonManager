import {Token} from "enmity/metro/common"
import {getByProps} from "enmity/metro"
import {createExportText} from "../components/Export";

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


export {createBackup, getBackup}