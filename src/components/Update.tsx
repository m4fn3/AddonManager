import {FormRow, ScrollView, FormInput, FormSection, View} from 'enmity/components'
import {Dialog, React, StyleSheet, Constants, Toasts, Navigation} from 'enmity/metro/common'
import {getIDByName} from "enmity/api/assets";

// @ts-ignore
import plugins from '../../plugins.json'
// @ts-ignore
import themes from '../../themes.json'
import {installPlugin, installTheme, getTheme, getThemes} from "../utils/addon"
import {getPlugin, getPlugins} from "enmity/managers/plugins"

const FailIcon = getIDByName('Small')
const DownloadIcon = getIDByName('ic_download_24px')
const CheckIcon = getIDByName('ic_check_24px')

function isUpdate(from, to) {
    return to.localeCompare(from, undefined, {numeric: true}) === 1
}

function Update() {

    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })


    const installedPlugins = getPlugins().map((plugin) => plugin.name)
    const installedThemes = getThemes().map((theme) => theme.name)

    // バージョンを比較してアップデート可能なプラグインのリストを取得すr - dbに存在することを確認,versionがない場合もあるのであることを先に確認
    let updatablePlugins = installedPlugins.filter((name) => Object.keys(plugins).includes(name) && Object.keys(plugins[name]).includes("version") && getPlugin(name).version && isUpdate(getPlugin(name).version, plugins[name].version))
    let updatableThemes = installedThemes.filter((name) => Object.keys(themes).includes(name) && Object.keys(themes[name]).includes("version") && getTheme(name).version && isUpdate(getTheme(name).version, themes[name].version))

    // [name, name, name...]
    const [pluginList, setPluginList] = React.useState(updatablePlugins.length ? updatablePlugins : ["@"])
    const [themeList, setThemeList] = React.useState(updatableThemes.length ? updatableThemes : ["@"])

    return (
        <ScrollView style={styles.container}>
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