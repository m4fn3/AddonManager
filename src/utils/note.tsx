import {Token} from "enmity/metro/common"
import {getByProps} from "enmity/metro"

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

export {fetchNote, setNote}