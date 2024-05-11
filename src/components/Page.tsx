import {React, Navigation, NavigationNative, NavigationStack, Constants, StyleSheet} from 'enmity/metro/common'
import {Button, View} from 'enmity/components'
// @ts-ignore
import {name as plugin_name} from '../../manifest.json'

const Settings = NavigationStack.createStackNavigator()

export default ({name = 'AddonManager', component = View} = {}) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
            flex: 1,
        },
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
        },
        headerButton: {
            color: Constants.ThemeColorMap.HEADER_PRIMARY
        }
    })

    return <NavigationNative.NavigationContainer independent={true}>
        <Settings.Navigator
            initialRouteName={name}
            style={styles.container}
            screenOptions={{
                cardOverlayEnabled: !1,
                cardShadowEnabled: !1,
                cardStyle: styles.cardStyle,
                headerStyle: styles.header,
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
                    ...NavigationStack.TransitionPresets.ModalPresentationIOS
                }}
            />
        </Settings.Navigator>
    </NavigationNative.NavigationContainer>;
}