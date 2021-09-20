import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import TwoColsComp from './twoCols_comp'
import { FACEBOOK, GOOGLE } from '../../utils/apiConstant'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'

const fb_signin = async () => {
    try {
        Facebook.initializeAsync({
            appId: FACEBOOK.app_id,
            appName: FACEBOOK.app_name,
        }).then( async () => {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync(
                {
                    permissions: ['public_profile', 'email']
                }
            )
            if (type === 'success') {
                fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`)
                .then(response=>response.json())
                .then(data=>{
                    console.log('user data:', data);
                })
            } else {
                console.log('FB - Cancel');
            }
        })
    } catch ({ message }) {
        console.log('FB - Error: ', message);
    }
}

const google_signin = async () => {
    try {
        const { type, user, accessToken}  = await Google.logInAsync({
            iosClientId : GOOGLE.iOS_client_ID,
            scopes : ['profile','email'],
        })
        console.log('Google access token:', accessToken);
        if (type === 'success'){
            console.log('Google - Success')
            console.log('Google user:', user);
        } else {
            console.log('Google - Cancel');
        }
    } catch ({message}) {
        console.log('Google - Error: ', message);
    }
}

export default function AlternativeSigninComp(params) {

    const alternativeSinginList = [
        {
            name: 'Facebook',
            img: require('../../assets/icons/facebook.png'),
            // onPress: ()=>alert('FB press'),
            onPress: fb_signin,
            size: { height: 35 }
        }, {
            name: 'Google',
            img: require('../../assets/icons/google.png'),
            // onPress: () => alert('Google press'),
            onPress : google_signin,
            size: { height: 42 }
        }, {
            name: 'Apple ID',
            img: require('../../assets/icons/apple.png'),
            onPress: () => alert('Apple press'),
            size: { height: 30 }
        }
    ]


    const SigninBtn = ({ signin }) => (
        <TouchableOpacity onPress={signin.onPress} style={styles.btnContainer}>
            <TwoColsComp
                leftComp={<Image resizeMethod='scale' resizeMode='contain' style={signin.size} source={signin.img} />}
                leftStyle={{ flex: 1, alignItems: 'center' }}
                rightComp={<Text style={styles.btnText}>{`SIGN IN with ${signin.name}`}</Text>}
                rightStyle={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}
            />
        </TouchableOpacity>
    )

    return (
        alternativeSinginList.map(signin => (<SigninBtn key={signin.name} signin={signin} />))
    )
}

const styles = StyleSheet.create({
    btnContainer: {
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
    logoImg: {
        height: 40,
    },
    btnText: {
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.body_3,
    }
})