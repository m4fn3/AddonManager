import {View, FormSection, FormRow, Image, Text, ScrollView} from "enmity/components"
import {SettingsStore} from "enmity/api/settings"
import {Constants, Navigation, React, StyleSheet, Toasts} from "enmity/metro/common"
import {getIDByName} from "enmity/api/assets"
import {Linking} from "enmity/metro/common"

// @ts-ignore
import {name, version} from '../../manifest.json'
import {PluginIcon, ThemeIcon} from "../utils/icons"
import Page from "./Page"
import {Plugins} from "./Plugins"
import {Themes} from "./Themes"
import {Update} from "./Update"
import {getPlugins} from "enmity/managers/plugins"
import {getByProps} from "enmity/metro"
import {Import} from "./Import"
import {getThemes} from "../utils/addon"

interface SettingsProps {
    settings: SettingsStore
}


const Clipboard = getByProps('setString')

// variables
const copyIcon = getIDByName('ic_message_copy')
const GitHubIcon = getIDByName('img_account_sync_github_white')
const TwitterIcon = getIDByName('img_account_sync_twitter_white')
const UpdateIcon = getIDByName('toast_image_saved')
const ExportIcon = getIDByName('ic_reply_24px')
const ImportIcon = getIDByName('ic_leave_stage')

// setting menu
export default ({settings}: SettingsProps) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
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

    return (
        <ScrollView>
            <View style={styles.container}>
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
                        Navigation.push(Page, {component: Plugins, name: "Plugins - AddonManager"})
                    }}
                />
                <FormRow
                    label="Browse themes"
                    leading={<ThemeIcon width={24} height={24}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.push(Page, {component: Themes, name: "Themes - AddonManager"})
                    }}
                />
                <FormRow
                    label="Export addons"
                    leading={<FormRow.Icon source={ExportIcon}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        let plugins = getPlugins().map((plugin) => plugin.name).join(";")
                        // @ts-ignore
                        let themes = getThemes().map((theme) => theme.name).join(";")
                        Clipboard.setString(`${plugins}|${themes}`)
                        Toasts.open({
                            content: "Copied addon list to clipboard!\nNow please save this to somewhere!",
                            source: copyIcon
                        })
                    }}
                />
                <FormRow
                    label="Import addons"
                    leading={<FormRow.Icon source={ImportIcon}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.push(Page, {component: Import, name: "Import - AddonManager"})
                    }}
                />
                <FormRow
                    label="Update addons"
                    leading={<FormRow.Icon source={UpdateIcon}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Navigation.push(Page, {component: Update, name: "Update - AddonManager"})
                    }}
                />
            </FormSection>
            <FormSection title="INFORMATION">
                <FormRow
                    label="Twitter @m4fn3"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={TwitterIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://twitter.com/m4fn3")
                    }}
                />
                <FormRow
                    label="GitHub (m4fn3)"
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
