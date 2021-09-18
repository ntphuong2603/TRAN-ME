import React from 'react'
import { BOTTOM_NAVIGATION, COLORS, FONT_SIZE, ROBOTO_FONT, } from '../utils/constant'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getCurrentBottomNavigation } from '../utils/getNavigationName'

export default function BottomNavigation(props) {

    const { navigation } = props

    return (
        <View style={styles.container}>
            <View style={styles.navigationContainer}>
                {BOTTOM_NAVIGATION.map((tab,index) => (
                    <TouchableOpacity onPress={() => navigation.navigate(tab.name)} key={`bottomNavigation-${index}`}>
                        <View style={styles.tabContainer}>
                            {getCurrentBottomNavigation({navigation}).currentNavigationName === tab.name ?
                                <>
                                    <Image resizeMode='contain' style={styles.bottomImage}
                                        source={tab.activeIcon}
                                    />
                                    <Text style={styles.activeText}>{`${tab.name[0].toUpperCase()}${tab.name.slice(1,8)}`}</Text>
                                </>
                                :
                                <>
                                    <Image resizeMode='contain' style={styles.bottomImage}
                                        source={tab.passiveIcon}
                                    />
                                    <Text style={styles.passiveText}>{`${tab.name[0].toUpperCase()}${tab.name.slice(1,8)}`}</Text>
                                </>
                            }
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        height: '10%',
        justifyContent:'center',
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.DARK_GRAY,
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bottomImage: {
        width: 25,
        height: 25,
    },
    activeText: {
        fontFamily: ROBOTO_FONT.medium,
        fontSize: FONT_SIZE.body_2,
        color: COLORS.BLACK
    },
    passiveText: {
        fontFamily: ROBOTO_FONT.medium,
        fontSize: FONT_SIZE.body_2,
        color: COLORS.GRAY,
    },
    tabContainer: {
        alignItems: 'center',
    }
})