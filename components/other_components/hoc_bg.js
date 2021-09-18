import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { DIMENSION } from '../../utils/constant'

export default function HOC_Background(props) {

    const { isShowRectangle, isNoBackground } = props

    const TransparentBackground = () => {
        return (
            <ImageBackground
                style={{ resizeMode: 'contain', height: DIMENSION.height, width: DIMENSION.width }}
                source={require('../../assets/images/background.png')}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.viewScreen}>
                        {props.children}
                    </View>
                </View>
            </ImageBackground>
        )
    }

    const RectangleBackground = () => {
        return (
            <ImageBackground
                style={{ resizeMode: 'contain', height: DIMENSION.height, width: DIMENSION.width }}
                source={require('../../assets/images/rectangle.png')}
            >
                <TransparentBackground/>
            </ImageBackground>
        )
    }

    if (isShowRectangle) {
        return (
            <RectangleBackground/>
        )
    }

    if (isNoBackground) {
        return (
            <>
                {props.children}
            </>
        )
    }

    return (
        <TransparentBackground/>
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
    viewScreen:{
        width: '97%',
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderColor: 'blue',
        // borderWidth: 1.5,
    }
})