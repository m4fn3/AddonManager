import {Constants, React, StyleSheet, Toasts} from "enmity/metro/common"
import {get, set} from "enmity/api/settings"
import {FormRow, FormSection, FormSwitch, ScrollView} from "enmity/components"
import {getPlugins} from "enmity/managers/plugins"

// @ts-ignore
import {name} from '../../manifest.json'
import {getThemes} from "../utils/addon"
import {Clipboard, Icons} from "../utils/common"

export function createExportText() {
    let plugins = getPlugins().map((plugin) => plugin.name).join(";")
    // @ts-ignore
    let themes = getThemes().map((theme) => theme.name).join(";")
    return `${plugins}|${themes}`
}

function Export() {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })
    const [switchVal, setSwitchVal] = React.useState(Boolean(get(name, "auto_backup"))) // 格納されている値は0,1になっているので真偽値に変換


    return (
        <ScrollView style={styles.container}>
            <FormSection title="EXPORT">
                <FormRow
                    label="Automatically create backup"
                    subLabel="Automatically save backup of installed addons. It will be linked with your discord account."
                    leading={<FormRow.Icon source={Icons.Export}/>}
                    trailing={
                        <FormSwitch
                            value={switchVal}
                            onValueChange={(value) => {
                                setSwitchVal(value)
                                set(name, "auto_backup", value)
                            }}
                        />
                    }
                />
            </FormSection>
            <FormSection title="ADVANCED">
                <FormRow
                    label="Export addons as text"
                    subLabel="Export installed addons as text that you can import manually."
                    leading={<FormRow.Icon source={Icons.Copy}/>}
                    trailing={FormRow.Arrow}
                    onPress={() => {
                        Clipboard.setString(createExportText())
                        Toasts.open({
                            content: "Copied addon list to clipboard!",
                            source: Icons.Copy
                        })
                    }}
                />
            </FormSection>
        </ScrollView>
    )
}

export {Export}