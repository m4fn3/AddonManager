import {Command, ApplicationCommandType} from "enmity/api/commands"
import {Navigation} from "enmity/metro/common"

import Page from "./Page";
import {HomeStack} from "./Home";

const addon: Command = {
    id: "addon",
    name: "addon",
    displayName: "addon",
    description: "Open AddonManager",
    displayDescription: "Open AddonManager",
    type: ApplicationCommandType.Chat,
    execute: async function (args, message) {
        Navigation.push(Page, {component: HomeStack, name: "AddonManager"})
    }
}

export default addon