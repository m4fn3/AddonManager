import {Command, ApplicationCommandType} from "enmity/api/commands"
import {Navigation} from "enmity/metro/common"

// @ts-ignore
import { name } from '../../manifest.json'
import Page from "./Page";
import Settings from './Settings'

const addon: Command = {
    id: "addon",
    name: "addon",
    displayName: "addon",
    description: "Open AddonManager",
    displayDescription: "Open AddonManager",
    type: ApplicationCommandType.Chat,
    execute: async function (args, message) {
        Navigation.push(Page, {component: Settings, name: "AddonManager"})
    }
}

export default addon