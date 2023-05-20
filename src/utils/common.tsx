import {Constants, React, StyleSheet} from "enmity/metro/common"
import {getIDByName} from "enmity/api/assets"
import {getByName, getByProps} from "enmity/metro"
import {getByKeyword} from "enmity/modules"

// modules
const Icon = getByName("Icon")
const Navigator = getByKeyword("getFocusedRoute")
const Search = getByName('StaticSearchBarContainer')
const Invites = getByProps('acceptInviteAndTransitionToInviteChannel')
const ReactNative = getByProps("AppState")
const Video = getByProps("DRMType", "FilterType").default
const Clipboard = getByProps('setString')

// icons
const Icons = {
    Copy: getIDByName('ic_message_copy'),
    GitHub: getIDByName('img_account_sync_github_white'),
    Twitter: getIDByName('img_account_sync_twitter_white'),
    Discord: getIDByName('Discord'),
    Update: getIDByName('toast_image_saved'),
    Export: getIDByName('ic_reply_24px'),
    Import: getIDByName('ic_leave_stage'),
    Fail: getIDByName('Small'),
    Download: getIDByName('ic_download_24px'),
    Check: getIDByName('ic_check_24px'),
    Clear: getIDByName('ic_input_clear_24px'),
    Uninstall: getIDByName('ic_trash_24px'),
    Settings: getIDByName('ic_settings_white_24px'),
    Add: getIDByName('hub-add'),
    SettingIcon: getIDByName('ic_rulebook') // ic_gridview
}

// styles
const stackStyles = StyleSheet.createThemedStyleSheet({
    cardStyle: {
        backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,
        color: Constants.ThemeColorMap.TEXT_NORMAL
    },
    header: {
        backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
        shadowColor: 'transparent',
        elevation: 0,
    },
    headerText: {
        color: Constants.ThemeColorMap.HEADER_PRIMARY,
    }
})

const screenOptions = {
    cardStyle: stackStyles.cardStyle,
    headerStyle: stackStyles.header,
    headerTitleContainerStyle: stackStyles.headerText,
    headerTitleStyle: stackStyles.headerText,
    headerBackTitleStyle: stackStyles.headerText,
    headerBackImage: () => <Icon source={getIDByName("ios-back")}/>,
    headerTitleAlign: 'center',
    safeAreaInsets: {
        top: 0,
    },
}


// func
function filterColor(color, light, dark, boundary = 186){
    // Chooses whether the color should be Dark or Light depending on the background color of the element.
    // by Rosie (@acquitelol)
    let baseColor = color.replace("#", "")
    const parseColorAsInt = (color, digits, base) => parseInt(color.substring(digits[0], digits[1]), base)
    const red = parseColorAsInt(baseColor, [0, 2], 16),
        green = parseColorAsInt(baseColor, [2, 4], 16),
        blue = parseColorAsInt(baseColor, [4, 6], 16)

    return (((red + green + blue) / (255 * 3)) > boundary)
        ? dark
        : light
}


export {screenOptions, Icons, Navigator, Search, Invites, ReactNative, Video, Clipboard, filterColor}