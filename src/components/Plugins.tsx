import {FormRow, ScrollView} from 'enmity/components'
import {Dialog, React} from 'enmity/metro/common'
import {getByName} from 'enmity/metro'

// @ts-ignore
import plugins from '../../plugins.json'
import {installPlugin} from "../utils/addon"
import {getPlugins} from "enmity/managers/plugins"
import {getIDByName} from "enmity/api/assets"

const DownloadIcon = getIDByName('ic_download_24px')
const CheckIcon = getIDByName('ic_check_24px')

const Search = getByName('StaticSearchBarContainer')

function Plugins() {
    const [query, setQuery] = React.useState("")
    // [name, name, name...]
    const [installedPlugins, setInstalledPlugins] = React.useState(getPlugins().map((plugin) => plugin.name))

    return (
        <>
            <Search
                placeholder="Search plugins"
                onChangeText={text => setQuery(text)}
            />
            <ScrollView>
                {Object.keys(plugins).sort().filter(key => key.toLowerCase().includes(query.toLowerCase())).map(key =>
                    <FormRow
                        label={plugins[key].version ? `${key} - v${plugins[key].version}` : key}
                        subLabel={plugins[key].description}
                        leading={installedPlugins.includes(key) ? <FormRow.Icon source={CheckIcon}/> : <FormRow.Icon source={DownloadIcon}/>}
                        trailing={installedPlugins.includes(key) ? undefined : FormRow.Arrow}
                        onPress={() => {
                            installPlugin(key, plugins[key].url, () => {
                                let newInstalledPlugins = Object.assign([], installedPlugins)
                                newInstalledPlugins.push(key)
                                setInstalledPlugins(newInstalledPlugins)
                            })
                        }}
                    />
                )}
            </ScrollView>
        </>
    )
}

export {Plugins}