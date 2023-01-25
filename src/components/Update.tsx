import {FormRow, ScrollView, FormSection, FormSwitch} from 'enmity/components'
import {React, StyleSheet, Constants} from 'enmity/metro/common'
import {getIDByName} from "enmity/api/assets"

import {installPlugin, installTheme, getTheme, getCachedUpdated, addCachedUpdated} from "../utils/addon"
import {getPlugin} from "enmity/managers/plugins"
import {getPluginDatabase, getThemeDatabase} from "../utils/fetch"
import {get, set} from "enmity/api/settings"

// @ts-ignore
import {name} from '../../manifest.json'
import {getUpdatablePlugins, getUpdatableThemes} from "../utils/update"
import {Navigator, Icons} from "../utils/common"

function Update() {

    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })
    const Navigation = Navigator.useNavigation()
    const plugins = getPluginDatabase()
    const themes = getThemeDatabase()

    const updatablePlugins = getUpdatablePlugins(plugins)
    const updatableThemes = getUpdatableThemes(themes)

    // [name, name, name...]
    const [pluginList, setPluginList] = React.useState(updatablePlugins.length ? updatablePlugins : ["@"])
    const [themeList, setThemeList] = React.useState(updatableThemes.length ? updatableThemes : ["@"])
    const [switchVal, setSwitchVal] = React.useState(Boolean(get(name, "check_updates"))) // 格納されている値は0,1になっているので真偽値に変換
    let updated_plugins = getCachedUpdated("plugin")
    let new_plugins = Object.assign([],pluginList.map(name => !updated_plugins.include(name)))
    setPluginList(new_plugins.length ? new_plugins : ["@"])
    let updated_themes = getCachedUpdated("theme")
    let new_themes = Object.assign([],themeList.map(name => !updated_themes.include(name)))
    setThemeList(new_themes.length ? new_themes : ["@"])

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
                                set(name, "check_updates", value)
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
                                    set(name, "_selected_plugin", name)
                                    Navigation.navigate("PluginDetail")
                                }}
                                onLongPress={() => {
                                    installPlugin(name, plugins[name].url, () => {
                                        addCachedUpdated("plugin", name)
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
                                    set(name, "_selected_theme", name)
                                    Navigation.navigate("ThemeDetail")
                                }}
                                onLongPress={()=>{
                                    installTheme(name, themes[name].url, () => {
                                        addCachedUpdated("theme", name)
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