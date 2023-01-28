import {FormRow, ScrollView} from 'enmity/components'
import {Constants, React, StyleSheet} from 'enmity/metro/common'
import {set} from "enmity/api/settings"

import {installPlugin, uninstallPlugin} from "../utils/addon"
import {getPlugins} from "enmity/managers/plugins"
import {getPluginDatabase} from "../utils/fetch"
// @ts-ignore
import {name as plugin_name} from '../../manifest.json'
import {Search, Navigator, Icons} from "../utils/common"
import {Detail} from "./Detail"

function Plugins({isSetting = false}) {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })
    const Navigation = Navigator.useNavigation()
    const plugins = getPluginDatabase()

    const [query, setQuery] = React.useState("")
    // [name, name, name...]
    const [installedPlugins, setInstalledPlugins] = React.useState(getPlugins().map((plugin) => plugin.name))

    return (
        <>
            <Search
                placeholder="Search plugins"
                onChangeText={text => setQuery(text)}
            />
            <ScrollView style={styles.container}>
                {Object.keys(plugins).sort().filter(key => key.toLowerCase().includes(query.toLowerCase())).map(key =>
                    <FormRow
                        label={plugins[key].version ? `${key} - v${plugins[key].version}` : key}
                        subLabel={plugins[key].description}
                        leading={installedPlugins.includes(key) ? <FormRow.Icon source={Icons.Uninstall}/> : <FormRow.Icon source={Icons.Download}/>}
                        trailing={FormRow.Arrow}
                        onPress={() => {
                            set(plugin_name, "_selected_plugin", key)
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
                            if (installedPlugins.includes(key)) {
                                uninstallPlugin(key, () => {
                                    let newInstalledPlugins = Object.assign([], installedPlugins)
                                    newInstalledPlugins.splice(newInstalledPlugins.indexOf(key), 1)
                                    setInstalledPlugins(newInstalledPlugins)
                                })
                            } else {
                                installPlugin(key, plugins[key].url, () => {
                                    let newInstalledPlugins = Object.assign([], installedPlugins)
                                    newInstalledPlugins.push(key)
                                    setInstalledPlugins(newInstalledPlugins)
                                })
                            }
                        }}
                    />
                )}
            </ScrollView>
        </>
    )
}

export {Plugins}