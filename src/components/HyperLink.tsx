import {Text} from "enmity/components";
import {Constants, Linking, React, StyleSheet, Toasts} from "enmity/metro/common"
import {installPlugin, installTheme} from "../utils/addon"
import {Clipboard, Icons} from "../utils/common"

export default ({content, addonType, addonName}) => {
    const styles = StyleSheet.createThemedStyleSheet({
        hyperLink: {
            color: Constants.ThemeColorMap.TEXT_LINK
        }
    })
    let descriptions = content.replace(/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*)/ig, "<l>$1<l>").split("<l>")
    return descriptions.map((text) => {
        if (text.startsWith("http")) {
            return (
                <Text
                    style={styles.hyperLink}
                    onPress={() => {
                        let download_link = addonType == "plugin" ? ".js" : ".json"
                        if (text.endsWith(download_link)) {
                            if (addonType == "plugin") installPlugin(addonName, text)
                            else installTheme(addonName, text)
                        } else {
                            Linking.openURL(text)
                        }
                    }}
                    onLongPress={() => {
                        Clipboard.setString(text)
                        Toasts.open({
                            content: `Copied URL to clipboard`,
                            source: Icons.Copy
                        })
                    }}
                >
                    {text}
                </Text>
            )
        } else {
            return (
                <Text>{text}</Text>
            )
        }
    })
}