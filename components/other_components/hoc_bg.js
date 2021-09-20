import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { DIMENSION } from '../../utils/constant'

export default function HOC_Background(props) {

    const { isShowRectangle, isNoBackground, isRectangleOnly } = props

    const ViewContainer = () => {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.viewScreen}>
                    {props.children}
                </View>
            </View>
        )
    }

    const TransparentBackground = () => {
        return (
            <ImageBackground
                style={{ resizeMode: 'contain', height: DIMENSION.height, width: DIMENSION.width }}
                source={require('../../assets/images/background.png')}
            >
                <ViewContainer/>
            </ImageBackground>
        )
    }

    const RectangleBackground = () => {
        return (
            <ImageBackground
                style={{ resizeMode: 'contain', height: DIMENSION.height, width: DIMENSION.width }}
                source={require('../../assets/images/rectangle.png')}
            >
                <TransparentBackground />
            </ImageBackground>
        )
    }

    if (isShowRectangle) {
        return (
            <RectangleBackground />
        )
    }

    if (isNoBackground) {
        return (
            <ViewContainer/>
        )
    }

    if (isRectangleOnly) {
        return (
            <ImageBackground
                style={{ resizeMode: 'contain', height: DIMENSION.height, width: DIMENSION.width }}
                source={require('../../assets/images/rectangle.png')}
            >
                <ViewContainer/>
            </ImageBackground>
        )
    }

    return (
        <TransparentBackground />
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 3,
    },
    viewScreen: {
        width: '97%',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderColor: 'blue',
        // borderWidth: 1.5,
    }
})