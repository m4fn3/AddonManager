import {FormRow, ScrollView} from 'enmity/components'
import {Constants, React, StyleSheet} from 'enmity/metro/common'
import {getThemeDatabase} from "../utils/fetch"
import {set} from "enmity/api/settings"
// @ts-ignore
import {name as plugin_name} from "../../manifest.json"
import {getThemes} from "../utils/addon"
import {Search, Navigator, Icons} from "../utils/common"
import {Detail} from "./Detail"


function Themes({isSetting=false, renderPage = null}) {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })
    const Navigation = Navigator.useNavigation()
    const themes = getThemeDatabase()
    const [query, setQuery] = React.useState("")
    // [name, name, name...]
    const [installedThemes, setInstalledThemes] = React.useState(getThemes().map((theme) => theme.name))

    return (
        <>
            <Search
                placeholder="Search themes"
                onChangeText={text => setQuery(text)}
            />
            <ScrollView style={styles.container}>
                {Object.keys(themes).sort().filter(key => key.toLowerCase().includes(query.toLowerCase())).map(key =>
                    <FormRow
                        label={themes[key].version ? `${key} - v${themes[key].version}` : key}
                        subLabel={themes[key].description}
                        leading={installedThemes.includes(key) ? <FormRow.Icon source={Icons.Uninstall}/> : <FormRow.Icon source={Icons.Download}/>}
                        trailing={FormRow.Arrow}
                        onPress={() => {
                            set(plugin_name, "_selected_theme", key)
                            if (isSetting) {
                                // Navigation.push("EnmityCustomPage", {
                                //     Navigation,
                                //     pageName: " ",
                                //     pagePanel: () => <Detail addonType="theme"/>
                                // })
                                renderPage(Navigation, {
                                    pageName: " ",
                                    pagePanel: () => <Detail addonType="theme"/>
                                })
                            } else {
                                Navigation.navigate("ThemeDetail")
                            }
                        }}
                    />
                )}
            </ScrollView>
        </>
    )
}

export {Themes}