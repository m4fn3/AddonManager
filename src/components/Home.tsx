import {View, FormSection, FormRow, Image, Text, ScrollView, TouchableOpacity} from "enmity/components"
import {Constants, NavigationStack, React, REST, StyleSheet} from "enmity/metro/common"
import {Linking} from "enmity/metro/common"
import {get, set} from "enmity/api/settings"

// @ts-ignore
import {name as plugin_name, name, version} from '../../manifest.json'
import {PluginIcon, ThemeIcon} from "../utils/icons"
import {Plugins} from "./Plugins"
import {Themes} from "./Themes"
import {Update} from "./Update"
import {Import} from "./Import"
import {Export} from "./Export";
import {screenOptions} from "../utils/common"
import {Detail} from "./Detail"
import {Icons, Invites, Navigator} from "../utils/common"
import {compatibilityURL, randomizeURL} from "../utils/fetch"
import {getByName} from "enmity/metro"
import {getPlugin} from "enmity/managers/plugins"
import {updatePlugin} from "../utils/updater"
import {Settings} from "./Settings"

const HelpMessage = getByName("HelpMessage")

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
                [[Plugins, "Plugins"], [Themes, "Themes"], [Export, "Export"], [Import, "Import"], [Update, "Update"], [Settings, "Settings"]].map(([Component, name]) =>
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

function Home({settings}) {
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
        notice: {
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20
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
    const ignored_ver = get(plugin_name, "ignored", null)

    React.useEffect(() => {
        REST.get(randomizeURL(compatibilityURL)).then(raw => {
            set(plugin_name, "compatibility", raw.text)
        })
    }, [])

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
            {
                ignored_ver ?
                    <TouchableOpacity
                        style={styles.notice}
                        onPress={() => {
                            const plugin = getPlugin(plugin_name)
                            updatePlugin(plugin.version, ignored_ver)
                        }}
                    >
                        <HelpMessage messageType={0}>
                            {`New version of AddonManager is available. Click here to update to v${ignored_ver}!`}
                        </HelpMessage>
                    </TouchableOpacity>
                    : <></>
            }
            <FormSection title="STORE">
                <FormRow
                    label="Browse plugins"
                    leading={<PluginIcon width={24} height={24}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        if (settings) {
                            Navigation.push("EnmityCustomPage", {
                                Navigation,
                                pageName: `Plugins`,
                                pagePanel: () => <Plugins isSetting={true}/>
                            })
                        } else {
                            Navigation.navigate("Plugins")
                        }
                    }}
                />
                <FormRow
                    label="Browse themes"
                    leading={<ThemeIcon width={24} height={24}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        if (settings) {
                            Navigation.push("EnmityCustomPage", {
                                Navigation,
                                pageName: `Themes`,
                                pagePanel: () => <Themes isSetting={true}/>
                            })
                        } else {
                            Navigation.navigate("Themes")
                        }
                    }}
                />
                <FormRow
                    label="Export addons"
                    leading={<FormRow.Icon source={Icons.Export}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        if (settings) {
                            Navigation.push("EnmityCustomPage", {
                                Navigation,
                                pageName: `Export`,
                                pagePanel: Export
                            })
                        } else {
                            Navigation.navigate("Export")
                        }
                    }}
                />
                <FormRow
                    label="Import addons"
                    leading={<FormRow.Icon source={Icons.Import}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        if (settings) {
                            Navigation.push("EnmityCustomPage", {
                                Navigation,
                                pageName: `Import`,
                                pagePanel: Import
                            })
                        } else {
                            Navigation.navigate("Import")
                        }
                    }}
                />
                <FormRow
                    label="Update addons"
                    leading={<FormRow.Icon source={Icons.Update}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        if (settings) {
                            Navigation.push("EnmityCustomPage", {
                                Navigation,
                                pageName: `Update`,
                                pagePanel: () => <Update isSetting={true}/>
                            })
                        } else {
                            Navigation.navigate("Update")
                        }
                    }}
                />
                <FormRow
                    label="Settings"
                    leading={<FormRow.Icon source={Icons.Settings}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        if (settings) {
                            Navigation.push("EnmityCustomPage", {
                                Navigation,
                                pageName: `Settings`,
                                pagePanel: () => <Settings isSetting={true}/>
                            })
                        } else {
                            Navigation.navigate("Settings")
                        }
                    }}
                />
            </FormSection>
            <FormSection title="INFORMATION">
                <FormRow
                    label="Follow me on Twitter"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={Icons.Twitter}/>}
                    onPress={() => {
                        Linking.openURL("https://twitter.com/m4fn3")
                    }}
                />
                <FormRow
                    label="Visit my server for help"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={Icons.Discord}/>}
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
                    leading={<FormRow.Icon source={Icons.GitHub}/>}
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

export {HomeStack, Home}