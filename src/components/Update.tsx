import {FormRow, ScrollView, FormSection, FormSwitch} from 'enmity/components'
import {React, StyleSheet, Constants} from 'enmity/metro/common'
import {getIDByName} from "enmity/api/assets";

import {installPlugin, installTheme, getTheme} from "../utils/addon"
import {getPlugin} from "enmity/managers/plugins"
import {getPluginDatabase, getThemeDatabase} from "../utils/fetch";
import {get, set} from "enmity/api/settings";

// @ts-ignore
import {name} from '../../manifest.json'
import {getUpdatablePlugins, getUpdatableThemes} from "../utils/update";

const DownloadIcon = getIDByName('ic_download_24px')
const UpdateIcon = getIDByName('ic_copy_message_link')


function Update() {

    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })

    const plugins = getPluginDatabase()
    const themes = getThemeDatabase()

    const updatablePlugins = getUpdatablePlugins(plugins)
    const updatableThemes = getUpdatableThemes(themes)

    // [name, name, name...]
    const [pluginList, setPluginList] = React.useState(updatablePlugins.length ? updatablePlugins : ["@"])
    const [themeList, setThemeList] = React.useState(updatableThemes.length ? updatableThemes : ["@"])
    const [switchVal, setSwitchVal] = React.useState(Boolean(get(name, "check_updates"))) // 格納されている値は0,1になっているので真偽値に変換

    return (
        <ScrollView style={styles.container}>
            <FormSection title="UPDATE">
                <FormRow
                    label="Check updates on startup"
                    leading={<FormRow.Icon source={UpdateIcon}/>}
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
                                leading={<FormRow.Icon source={DownloadIcon}/>}
                                trailing={FormRow.Arrow}
                                onPress={() => {
                                    installPlugin(name, plugins[name].url, () => {
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
                            ? <FormRow label="No updates are found for plugins"/>
                            : <FormRow
                                label={name ? `${name} - v${getTheme(name).version} -> v${themes[name].version}` : name}
                                subLabel={themes[name].description}
                                leading={<FormRow.Icon source={DownloadIcon}/>}
                                trailing={FormRow.Arrow}
                                onPress={() => {
                                    installTheme(name, themes[name].url, () => {
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