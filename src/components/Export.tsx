import {Constants, React, StyleSheet, Toasts} from "enmity/metro/common"
import {get, set} from "enmity/api/settings"
import {FormRow, FormSection, FormSwitch, ScrollView} from "enmity/components"

// @ts-ignore
import {name as plugin_name} from '../../manifest.json'
import {Clipboard, Icons} from "../utils/common"
import {createBackup, createExportText} from "../utils/backup"


function Export() {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
        }
    })
    const [switchVal, setSwitchVal] = React.useState(Boolean(get(plugin_name, "auto_backup"))) // 格納されている値は0,1になっているので真偽値に変換


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
                                // create backup when it got enabled too
                                if (value) createBackup()
                                set(plugin_name, "auto_backup", value)
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