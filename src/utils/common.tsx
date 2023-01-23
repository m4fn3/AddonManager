import {Constants, React, StyleSheet} from "enmity/metro/common";
import {getIDByName} from "enmity/api/assets";
import {getByName} from "enmity/metro";

const Icon = getByName("Icon")

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

export {screenOptions}