import {View, FormSection, FormRow, Image, Text, ScrollView, Button} from "enmity/components"
import {Constants, Navigation, NavigationStack, React, StyleSheet, Toasts} from "enmity/metro/common"
import {getIDByName} from "enmity/api/assets"
import {Linking} from "enmity/metro/common"

// @ts-ignore
import {name, version} from '../../manifest.json'
import {PluginIcon, ThemeIcon} from "../utils/icons"
import {Plugins} from "./Plugins"
import {Themes} from "./Themes"
import {Update} from "./Update"
import {getByProps} from "enmity/metro"
import {Import} from "./Import"
import {Export} from "./Export";
import {getByKeyword} from "enmity/modules"
import {screenOptions} from "../utils/common"
import {Detail} from "./Detail";
import {get} from "enmity/api/settings";
import {getTheme, installPlugin, installTheme, uninstallPlugin, uninstallTheme} from "../utils/addon";
import {getPluginDatabase, getThemeDatabase} from "../utils/fetch";
import {getPlugin} from "enmity/managers/plugins";

const Invites = getByProps('acceptInviteAndTransitionToInviteChannel')
const Navigator = getByKeyword("getFocusedRoute")

// variables
const GitHubIcon = getIDByName('img_account_sync_github_white')
const TwitterIcon = getIDByName('img_account_sync_twitter_white')
const DiscordIcon = getIDByName('Discord')
const UpdateIcon = getIDByName('toast_image_saved')
const ExportIcon = getIDByName('ic_reply_24px')
const ImportIcon = getIDByName('ic_leave_stage')

const Stack = NavigationStack.createStackNavigator()

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                ...screenOptions
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            {
                [[Plugins, "Plugins"], [Themes, "Themes"], [Export, "Export"], [Import, "Import"], [Update, "Update"]].map(([Component, name]) =>
                    <Stack.Screen
                        name={name}
                        component={Component}
                    />
                )
            }
            <Stack.Screen
                name="PluginDetail"
                component={() => <Detail addonType="plugin"/>}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen
                name="ThemeDetail"
                component={() => <Detail addonType="theme"/>}
                options={{
                    title: ""
                }}
            />
        </Stack.Navigator>
    )
}

function Home() {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        },
        header: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20
        },
        title: {
            flexDirection: "column",

        },
        name: {
            fontSize: 30,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 30,
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
        },
        author: {
            fontSize: 15,
            paddingLeft: 50,
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
        },
        info: {
            height: 45,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 20
        }
    })
    const Navigation = Navigator.useNavigation()

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{uri: 'https://avatars.githubusercontent.com/u/43488869'}}
                    style={styles.image}
                />
                <View style={styles.title}>
                    <Text style={styles.name}>AddonManager</Text>
                    <Text style={styles.author}>by mafu</Text>
                </View>
            </View>
            <FormSection title="STORE">
                <FormRow
                    label="Browse plugins"
                    leading={<PluginIcon width={24} height={24}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.navigate("Plugins")
                    }}
                />
                <FormRow
                    label="Browse themes"
                    leading={<ThemeIcon width={24} height={24}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.navigate("Themes")
                    }}
                />
                <FormRow
                    label="Export addons"
                    leading={<FormRow.Icon source={ExportIcon}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.navigate("Export")
                    }}
                />
                <FormRow
                    label="Import addons"
                    leading={<FormRow.Icon source={ImportIcon}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.navigate("Import")
                    }}
                />
                <FormRow
                    label="Update addons"
                    leading={<FormRow.Icon source={UpdateIcon}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.navigate("Update")
                    }}
                />
            </FormSection>
            <FormSection title="INFORMATION">
                <FormRow
                    label="Follow me on Twitter"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={TwitterIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://twitter.com/m4fn3")
                    }}
                />
                <FormRow
                    label="Visit my server for help"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={DiscordIcon}/>}
                    onPress={() => {
                        Invites.acceptInviteAndTransitionToInviteChannel({
                            inviteKey: 'TrCqPTCrdq',
                            context: {location: 'Invite Button Embed'},
                            callback: () => {
                                Navigation.pop()
                            }
                        })
                    }}
                />
                <FormRow
                    label="Check Source on GitHub"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={GitHubIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://github.com/m4fn3/AddonManager")
                    }}
                />
            </FormSection>
            <Text style={styles.footer}>
                {`v${version}`}
            </Text>
        </ScrollView>
    )
}

export {HomeStack}