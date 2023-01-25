import {FormRow, ScrollView} from 'enmity/components'
import {Constants, React, StyleSheet} from 'enmity/metro/common'
import {getByName} from 'enmity/metro'
import {getIDByName} from "enmity/api/assets"
import {getThemeDatabase} from "../utils/fetch"
import {getByKeyword} from "enmity/modules"
import {set} from "enmity/api/settings"
// @ts-ignore
import {name} from "../../manifest.json"
import {getThemes} from "../utils/addon"
import {Search, Navigator, Icons} from "../utils/common"


function Themes() {
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
                            set(name, "_selected_theme", key)
                            Navigation.navigate("ThemeDetail")
                            // Navigation.push(Page, {component: Detail, name: key, detail: "plugin"})
                        }}
                    />
                )}
            </ScrollView>
        </>
    )
}

export {Themes}