import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import TwoColsComp from './twoCols_comp'

export default function  AlternativeSigninComp(params) {

    const alternativeSinginList = [
        {
            name: 'Facebook',
            img: require('../../assets/icons/facebook.png'),
            onPress: ()=>alert('FB press'),
            size: { height: 35}
        },{
            name: 'Google',
            img: require('../../assets/icons/google.png'),
            onPress: ()=>alert('Google press'),
            size: { height: 43}
        },{
            name: 'Apple ID',
            img: require('../../assets/icons/apple.png'),
            onPress: ()=>alert('Apple press'),
            size: { height: 30}
        }
    ]


    const SigninBtn = ({signin}) => (
        <TouchableOpacity onPress={signin.onPress} style={styles.btnContainer}> 
            <TwoColsComp
                leftComp={<Image resizeMethod='scale' resizeMode='contain' style={signin.size} source={signin.img}/>}
                leftStyle={{flex: 1, alignItems: 'center'}}
                rightComp={<Text style={styles.btnText}>{`SIGN IN with ${signin.name}`}</Text>}
                rightStyle={{flex: 7, alignItems: 'center'}}
            />
        </TouchableOpacity>
    )

    return(
        alternativeSinginList.map(signin=>(<SigninBtn key={signin.name} signin={signin}/>))
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        height: 45,
        borderColor: COLORS.BLACK,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        // alignItems: 'center',
        // alignContent: 'center'
        justifyContent: 'center'
    },
    logoImg:{
        height: 40,
    },
    btnText:{
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.body_3,
    }
})