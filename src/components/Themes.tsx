import {FormRow, ScrollView} from 'enmity/components'
import {React} from 'enmity/metro/common'
import {getByName} from 'enmity/metro'

import {getThemes, installPlugin, installTheme, uninstallTheme} from "../utils/addon"
import {getIDByName} from "enmity/api/assets"
import {getThemeDatabase} from "../utils/fetch";

const DownloadIcon = getIDByName('ic_download_24px')
const UninstallIcon = getIDByName('ic_trash_24px')

const Search = getByName('StaticSearchBarContainer')


function Themes(){

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
            <ScrollView>
                {Object.keys(themes).sort().filter(key => key.toLowerCase().includes(query.toLowerCase())).map(key =>
                    <FormRow
                        label={themes[key].version ? `${key} - v${themes[key].version}` : key}
                        subLabel={themes[key].description}
                        leading={installedThemes.includes(key) ? <FormRow.Icon source={UninstallIcon}/> : <FormRow.Icon source={DownloadIcon}/>}
                        trailing={FormRow.Arrow}
                        onPress={() => {
                            if (installedThemes.includes(key)){
                                uninstallTheme(key,  () => {
                                    let newInstalledThemes = Object.assign([], installedThemes)
                                    newInstalledThemes.splice(newInstalledThemes.indexOf(key), 1)
                                    setInstalledThemes(newInstalledThemes)
                                })
                            } else {
                                installTheme(key, themes[key].url, () => {
                                    let newInstalledThemes = Object.assign([], installedThemes)
                                    newInstalledThemes.push(key)
                                    setInstalledThemes(newInstalledThemes)
                                })
                            }
                        }}
                    />
                )}
            </ScrollView>
        </>
    )
}

export {Themes}