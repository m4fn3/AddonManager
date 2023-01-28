import {FormRow, ScrollView, FormSection, FormSwitch} from 'enmity/components'
import {React, StyleSheet, Constants} from 'enmity/metro/common'

import {installPlugin, installTheme, getTheme, getCachedUpdated, addCachedUpdated} from "../utils/addon"
import {getPlugin} from "enmity/managers/plugins"
import {getPluginDatabase, getThemeDatabase} from "../utils/fetch"
import {get, set} from "enmity/api/settings"

// @ts-ignore
import {name as plugin_name} from '../../manifest.json'
import {getUpdatablePlugins, getUpdatableThemes} from "../utils/update"
import {Navigator, Icons} from "../utils/common"
import {Detail} from "./Detail";


function Update({isSetting}) {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })
    const Navigation = Navigator.useNavigation()
    const isFocused = Navigator.useIsFocused()

    const plugins = getPluginDatabase()
    const themes = getThemeDatabase()

    const updatablePlugins = getUpdatablePlugins(plugins)
    const updatableThemes = getUpdatableThemes(themes)

    // // [name, name, name...]
    let [pluginList, setPluginList] = React.useState(updatablePlugins.length ? updatablePlugins : ["@"])
    let [themeList, setThemeList] = React.useState(updatableThemes.length ? updatableThemes : ["@"])
    const [switchVal, setSwitchVal] = React.useState(Boolean(get(plugin_name, "check_updates"))) // 格納されている値は0,1になっているので真偽値に変換

    React.useEffect(() => {
        let updated_plugins = getCachedUpdated("plugin")
        let new_plugins = Object.assign([], pluginList.filter(name => !updated_plugins.includes(name)))
        setPluginList(new_plugins.length ? new_plugins : ["@"])
        let updated_themes = getCachedUpdated("theme")
        let new_themes = Object.assign([], themeList.filter(name => !updated_themes.includes(name)))
        setThemeList(new_themes.length ? new_themes : ["@"])
    }, [isFocused])  // backしてきたときも更新するために


    return (
        <ScrollView style={styles.container}>
            <FormSection title="UPDATE">
                <FormRow
                    label="Check updates on startup"
                    leading={<FormRow.Icon source={Icons.Update}/>}
                    trailing={
                        <FormSwitch
                            value={switchVal}
                            onValueChange={(value) => {
                                setSwitchVal(value)
                                set(plugin_name, "check_updates", value)
                            }}
                        />
                    }
                />
            </FormSection>
            <FormSection title="PLUGINS">
                {
                    pluginList.map((name) =>
                        name === "@"
                            ? <FormRow label="No updates are found for plugins"/>
                            : <FormRow
                                label={name ? `${name} - v${getPlugin(name).version} -> v${plugins[name].version}` : name}
                                subLabel={plugins[name].description}
                                leading={<FormRow.Icon source={Icons.Download}/>}
                                trailing={FormRow.Arrow}
                                onPress={() => {
                                    set(plugin_name, "_selected_plugin", name)
                                    if (isSetting) {
                                        Navigation.push("EnmityCustomPage", {
                                            Navigation,
                                            pageName: " ",
                                            pagePanel: () => <Detail addonType="plugin"/>
                                        })
                                    } else {
                                        Navigation.navigate("PluginDetail")
                                    }
                                }}
                                onLongPress={() => {
                                    installPlugin(name, plugins[name].url, () => {
                                        addCachedUpdated("plugin", name)
                                        let newPlugins = Object.assign([], pluginList) // そのままコピーすると再レンダリングされないので参照付きコピーではなく新規作成すること！
                                        newPlugins.splice(newPlugins.indexOf(name), 1)
                                        setPluginList(newPlugins.length ? newPlugins : ["@"])
                                    })
                                }}
                            />
                    )
                }
            </FormSection>
            <FormSection title="THEMES">
                {
                    themeList.map((name) =>
                        name === "@"
                            ? <FormRow label="No updates are found for themes"/>
                            : <FormRow
                                label={name ? `${name} - v${getTheme(name).version} -> v${themes[name].version}` : name}
                                subLabel={themes[name].description}
                                leading={<FormRow.Icon source={Icons.Download}/>}
                                trailing={FormRow.Arrow}
                                onPress={() => {
                                    set(plugin_name, "_selected_theme", name)
                                    if (isSetting) {
                                        Navigation.push("EnmityCustomPage", {
                                            Navigation,
                                            pageName: " ",
                                            pagePanel: () => <Detail addonType="theme"/>
                                        })
                                    } else {
                                        Navigation.navigate("ThemeDetail")
                                    }
                                }}
                                onLongPress={() => {
                                    installTheme(name, themes[name].url, () => {
                                        addCachedUpdated("theme", name)
                                        let newThemes = Object.assign([], themeList) // そのままコピーすると再レンダリングされないので参照付きコピーではなく新規作成すること！
                                        newThemes.splice(newThemes.indexOf(name), 1)
                                        setThemeList(newThemes.length ? newThemes : ["@"])
                                    })
                                }}
                            />
                    )
                }
            </FormSection>
        </ScrollView>
    )
}

export {Update}