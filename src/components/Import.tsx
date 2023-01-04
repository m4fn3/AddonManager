import {FormRow, ScrollView, FormInput, FormSection, View} from 'enmity/components'
import {Dialog, React, StyleSheet, Constants, Toasts, Navigation} from 'enmity/metro/common'
import {getIDByName} from "enmity/api/assets";

// @ts-ignore
import plugins from '../../plugins.json'
// @ts-ignore
import themes from '../../themes.json'
import {getThemes, installPlugin, installTheme} from "../utils/addon"
import {getPlugins} from "enmity/managers/plugins"

const FailIcon = getIDByName('Small')
const DownloadIcon = getIDByName('ic_download_24px')
const CheckIcon = getIDByName('ic_check_24px')

function Import() {

    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })

    // {"name": {name, url, version, installed}}
    const [pluginList, setPluginList] = React.useState({"": {}})
    const [themeList, setThemeList] = React.useState({"": {}})

    return (
        <ScrollView style={styles.container}>
            <FormSection title="IMPORT">
                <FormInput
                    placeholder="Paste exported text here"
                    onSubmitEditing={(event) => {
                        let content = event.nativeEvent.text.split("|")
                        if (content.length != 2) {
                            Toasts.open({
                                content: "Invalid text format. Please make sure that you entered correct text.",
                                source: FailIcon
                            })
                            return
                        }
                        const installedPlugins = getPlugins().map((plugin) => plugin.name)
                        const installedThemes = getThemes().map((theme) => theme.name)
                        let importedPlugins = {}
                        let importedThemes = {}
                        content[0].split(";").filter((name) => Object.keys(plugins).includes(name)).forEach((name) => {
                            importedPlugins[name] = Object.assign(plugins[name], {"installed": installedPlugins.includes(name)})
                        })
                        setPluginList(Object.keys(importedPlugins).length ? importedPlugins : {"": {}})
                        content[1].split(";").filter((name) => Object.keys(themes).includes(name)).forEach((name) => {
                            importedThemes[name] = Object.assign(themes[name], {"installed": installedThemes.includes(name)})
                        })
                        setThemeList(Object.keys(importedThemes).length ? importedThemes : {"": {}})
                    }}
                />
            </FormSection>
            <FormSection title="PLUGINS">
                {
                    Object.keys(pluginList).map((name) =>
                        !pluginList[name].url
                            ? <FormRow label="There are no imported plugins yet"/>
                            : <FormRow
                                label={name ? `${name} - v${pluginList[name].version}` : name}
                                subLabel={pluginList[name].description}
                                leading={pluginList[name].installed ? <FormRow.Icon source={CheckIcon}/> : <FormRow.Icon source={DownloadIcon}/>}
                                trailing={pluginList[name].installed ? undefined : FormRow.Arrow}
                                onPress={() => {
                                    installPlugin(name, plugins[name].url, () => {
                                        let newPlugins = Object.assign({}, pluginList) // そのままコピーすると再レンダリングされないので参照付きコピーではなく新規作成すること！
                                        newPlugins[name].installed = true
                                        setPluginList(newPlugins)
                                    })
                                }}
                            />
                    )
                }
            </FormSection>
            <FormSection title="THEMES">
                {
                    Object.keys(themeList).map((name) =>
                        !themeList[name].url
                            ? <FormRow label="There are no imported themes yet"/>
                            : <FormRow
                                label={name ? `${name} - v${themeList[name].version}` : name}
                                subLabel={themeList[name].description}
                                leading={themeList[name].installed ? <FormRow.Icon source={CheckIcon}/> : <FormRow.Icon source={DownloadIcon}/>}
                                trailing={themeList[name].installed ? undefined : FormRow.Arrow}
                                onPress={() => {
                                    installTheme(name, themes[name].url, () => {
                                        let newThemes = Object.assign({}, themeList) // そのままコピーすると再レンダリングされないので参照付きコピーではなく新規作成すること！
                                        newThemes[name].installed = true
                                        setPluginList(newThemes)
                                    })
                                }}
                            />
                    )
                }
            </FormSection>
        </ScrollView>
    )
}

export {Import}