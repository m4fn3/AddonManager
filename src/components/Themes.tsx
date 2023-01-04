import {FormRow, ScrollView} from 'enmity/components'
import {Dialog, React} from 'enmity/metro/common'
import {getByName} from 'enmity/metro'

// @ts-ignore
import themes from '../../themes.json'
import {getThemes, installPlugin, installTheme} from "../utils/addon"
import {getIDByName} from "enmity/api/assets"

const DownloadIcon = getIDByName('ic_download_24px')
const CheckIcon = getIDByName('ic_check_24px')

const Search = getByName('StaticSearchBarContainer')


function Themes(){
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
                        leading={installedThemes.includes(key) ? <FormRow.Icon source={CheckIcon}/> : <FormRow.Icon source={DownloadIcon}/>}
                        trailing={installedThemes.includes(key) ? undefined : FormRow.Arrow}
                        onPress={() => {
                            installTheme(key, themes[key].url, () => {
                                let newInstalledThemes = Object.assign([], installedThemes)
                                newInstalledThemes.push(key)
                                setInstalledThemes(newInstalledThemes)
                            })
                        }}
                    />
                )}
            </ScrollView>
        </>
    )
}

export {Themes}