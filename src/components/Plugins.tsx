import {FormRow, ScrollView} from 'enmity/components'
import {Constants, React, StyleSheet} from 'enmity/metro/common'
import {getByName} from 'enmity/metro'
import {set} from "enmity/api/settings"

import {installPlugin, uninstallPlugin} from "../utils/addon"
import {getPlugins} from "enmity/managers/plugins"
import {getIDByName} from "enmity/api/assets"
import {getPluginDatabase} from "../utils/fetch"
// @ts-ignore
import {name} from '../../manifest.json'
import {getByKeyword} from "enmity/modules"

const DownloadIcon = getIDByName('ic_download_24px')
const UninstallIcon = getIDByName('ic_trash_24px')

const Search = getByName('StaticSearchBarContainer')
const Navigator = getByKeyword("getFocusedRoute")

function Plugins() {
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
                        leading={installedPlugins.includes(key) ? <FormRow.Icon source={UninstallIcon}/> : <FormRow.Icon source={DownloadIcon}/>}
                        trailing={FormRow.Arrow}
                        onPress={() => {
                            set(name, "_selected_plugin", key)
                            Navigation.navigate("PluginDetail")
                            // Navigation.push(Page, {component: Detail, name: key, detail: "plugin"})
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