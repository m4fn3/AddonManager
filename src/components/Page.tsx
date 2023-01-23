import {React, Navigation, NavigationNative, NavigationStack, StyleSheet, ColorMap} from 'enmity/metro/common';
import {Button, View} from 'enmity/components';
import {getPlugin} from "enmity/managers/plugins";
import {get} from "enmity/api/settings";
import {installPlugin, uninstallPlugin} from "../utils/addon";
import {getPluginDatabase} from "../utils/fetch";
// @ts-ignore
import {name as name_} from '../../manifest.json'

export const Settings = NavigationStack.createStackNavigator();

const {ThemeColorMap} = ColorMap;

export default ({name = 'AddonManager', component = View, detail = null} = {}) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
            flex: 1,
        },
        cardStyle: {
            backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,
            color: ThemeColorMap.TEXT_NORMAL
        },
        header: {
            backgroundColor: ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
            shadowColor: 'transparent',
            elevation: 0,
        },
        headerText: {
            color: ThemeColorMap.HEADER_PRIMARY,
        },
        headerButton: {
            color: ThemeColorMap.HEADER_PRIMARY
        }
    })
    let installed, plugin_name
    if (detail) {
        plugin_name = get(name_, "_selected_plugin").toString()
        installed = getPlugin(plugin_name)
    }

    return <NavigationNative.NavigationContainer>
        <Settings.Navigator
            initialRouteName={name}
            style={styles.container}
            screenOptions={{
                cardOverlayEnabled: !1,
                cardShadowEnabled: !1,
                cardStyle: styles.cardStyle,
                headerStyle: styles.header,
                headerTitleContainerStyle: styles.headerTitleContainer,
                headerTitleAlign: 'center',
                safeAreaInsets: {
                    top: 0,
                },
            }}
        >
            <Settings.Screen
                name={name}
                component={component}
                options={{
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerLeft: () => (
                        <Button
                            color={styles.headerButton.color}
                            title='Close'
                            onPress={(): void => Navigation.pop()}
                        />
                    ),
                    headerRight: () => {
                        return detail ? <Button
                            color={styles.headerButton.color}
                            title={installed ? "Uninstall" : "Install"}
                            onPress={() => {
                                if (installed) {
                                    uninstallPlugin(plugin_name, ()=>Navigation.pop())
                                } else {
                                    const plugins = getPluginDatabase()
                                    installPlugin(plugin_name, plugins[plugin_name].url, ()=>Navigation.pop())
                                }
                            }}
                        /> : <></>
                    },
                    ...NavigationStack.TransitionPresets.ModalPresentationIOS
                }}
            />
        </Settings.Navigator>
    </NavigationNative.NavigationContainer>;
}