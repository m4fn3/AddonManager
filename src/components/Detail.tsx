import {ScrollView, Text, Image, FlatList, FormRow, TouchableOpacity} from 'enmity/components'
import {React, StyleSheet, Constants, REST} from 'enmity/metro/common'
// @ts-ignore
import {name as plugin_name} from '../../manifest.json'
import {get} from "enmity/api/settings"
import {getCompatibility, getDetailURL, getPluginDatabase, getThemeDatabase, randomizeURL} from "../utils/fetch"
import {PluginIcon, ThemeIcon} from "../utils/icons"
import {getPlugin} from "enmity/managers/plugins"
import {getTheme, getThemeColors, installPlugin, installTheme, addCachedUpdated, uninstallPlugin, uninstallTheme} from "../utils/addon"
import {compare, getUpdatablePlugins, getUpdatableThemes} from "../utils/update"
import {ReactNative, Video} from "../utils/common"
import {version} from "enmity/api/native";

function Detail({addonType}) {
    let bgColor = getThemeColors("PRIMARY_DARK_500")
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flex: 1,
            backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,
            padding: 10
        },
        previews: {
            marginTop: 20,
            justifyContent: 'center'
        },
        addonName: {
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
            fontFamily: Constants.Fonts.PRIMARY_SEMIBOLD,
            fontSize: 20
        },
        addonTitle: {
            borderBottomWidth: 1,
            borderBottomColor: Constants.ThemeColorMap.HEADER_SECONDARY,
            paddingBottom: 20
        },
        sectionTitle: {
            marginTop: 20,
            marginLeft: 20,
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
        },
        sectionContent: {
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Constants.ThemeColorMap.HEADER_SECONDARY,
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
            padding: 10
        },
        addonEdit: {
            backgroundColor: bgColor ? bgColor : Constants.ThemeColorMap.BACKGROUND_SECONDARY,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 20,
            borderWidth: 1,
            width: 80,
            alignItems: 'center',
            borderColor: bgColor ? bgColor : Constants.ThemeColorMap.BACKGROUND_SECONDARY,
            overflow: "hidden"
        },
        addonEditText: {
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
            fontFamily: Constants.Fonts.PRIMARY_SEMIBOLD
        },
    })

    // https://justacoding.blog/how-to-make-part-of-the-text-bold-in-react-native/
    const screen_width = ReactNative.useWindowDimensions().width
    const [description, setDescription] = React.useState("Loading description...")
    const [previews, setPreviews] = React.useState([])
    const addonName = get(plugin_name, `_selected_${addonType}`).toString()

    const addons = addonType == "plugin" ? getPluginDatabase() : getThemeDatabase()
    const data = addons[addonName]
    let updatableAddons = addonType == "plugin" ? getUpdatablePlugins(addons) : getUpdatableThemes(addons)

    let installed = addonType == "plugin" ? Boolean(getPlugin(addonName)) : Boolean(getTheme(addonName))
    let isUpdatable = updatableAddons.includes(addonName)
    const [updatable, setUpdatable] = React.useState(isUpdatable)
    const [editText, setEditText] = React.useState(installed ? (updatable ? "UPDATE" : "REMOVE") : "GET")
    const [notice, setNotice] = React.useState(undefined)


    React.useEffect(() => {
        REST.get(randomizeURL(getDetailURL(addonType, addonName))).then(raw => {
            let data = JSON.parse(raw.text)
            setDescription(data.description)
            let draftPreviews = Object.assign(
                data.images.map((url) => {
                    return {"url": url, "width": 1, "height": 1, "type": "image"}
                }),
                data.videos.map((url) => {
                    return {"url": url, "width": null, "height": null, "type": "video"}
                })
            )
            setPreviews(draftPreviews)
        }).catch(response => {
            if (response.status === 404) {
                setDescription("No description.")
            }
        })

        const compat = getCompatibility()
        if (addonName in compat[addonType]) {
            let vers = compat[addonType][addonName].ver.split("~")
            let min_ = vers[0] ? vers[0] : "0.0"
            let max_ = vers[1] ? vers[1] : "999.0"
            if (!(compare(min_, version) >= 0 && compare(version, max_) >= 0)) { // not min <= version <= max
                setNotice(compat[addonType][addonName].text + `\n\nCompatibility: ${compat[addonType][addonName].ver} ( currently on ${version})`)
            }
        }
    }, [])

    return (
        <ScrollView style={styles.container}>
            <FormRow
                style={styles.addonText}
                label={() => <Text style={styles.addonName}>{addonName}</Text>}
                leading={addonType == "plugin" ? <PluginIcon width={32} height={32}/> : <ThemeIcon width={32} height={32}/>}
                trailing={
                    <TouchableOpacity
                        style={styles.addonEdit}
                        onPress={() => {
                            if (addonType == "plugin") {
                                if (getPlugin(addonName) && !updatable) uninstallPlugin(addonName, () => setEditText("GET"))
                                else installPlugin(addonName, data.url, () => {
                                    setUpdatable(false)
                                    addCachedUpdated(addonType, addonName)
                                    setEditText("REMOVE")
                                })
                            } else {
                                if (getTheme(addonName) && !updatable) uninstallTheme(addonName, () => setEditText("GET"))
                                else installTheme(addonName, data.url, () => {
                                    setUpdatable(false)
                                    addCachedUpdated(addonType, addonName)
                                    setEditText("REMOVE")
                                })
                            }
                        }}>
                        <Text style={styles.addonEditText}>{editText}</Text>
                    </TouchableOpacity>}
                subLabel={data.description}
            />
            {
                [1].filter(_ => Boolean(notice)).map(_ => (
                    <>
                        <Text style={[styles.sectionTitle, {color: "#e74c3c"}]}>Notice</Text>
                        <Text style={[styles.sectionContent, {borderColor: "#e74c3c"}]}>{notice}</Text>
                    </>
                ))
            }
            <FlatList
                horizontal={true}
                data={previews}
                style={styles.previews}
                renderItem={({index, item}) => {
                    if (item.type == "image") {
                        return <Image
                            style={{
                                width: item.width,
                                height: item.height,
                                margin: 5
                            }}
                            source={{uri: item.url}}
                            onLoad={({nativeEvent: {source: {width, height}}}) => { // 読込後に横幅/縦幅を設定
                                let aspect = width / height
                                width = aspect < 1 ? screen_width * 2 / 5 : screen_width * 2 / 3
                                height = width / aspect
                                let new_previews = Object.assign([], previews)
                                new_previews[index].width = width
                                new_previews[index].height = height
                                setPreviews(new_previews)
                            }}
                        />
                    } else if (item.type == "video") {
                        return <Video
                            style={{
                                width: item.width,
                                height: item.height
                            }}
                            source={{uri: item.url}}
                            controls={true}
                            paused={true}
                            onLoad={({naturalSize: {width, height}}) => { // 読込後に横幅/縦幅を設定
                                let aspect = width / height
                                width = aspect < 1 ? screen_width * 2 / 5 : screen_width * 2 / 3
                                height = width / aspect
                                let new_previews = Object.assign([], previews)
                                new_previews[index].width = width
                                new_previews[index].height = height
                                setPreviews(new_previews)
                            }}
                        />
                    }
                }}
                showsHorizontalScrollIndicator={true}
            />
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.sectionContent}>{description}</Text>
        </ScrollView>
    )
}

export {Detail}