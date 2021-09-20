import React, { useEffect } from 'react'
import Welcome_scr from "../screens/welcome_scr"
import Signup_scr from '../screens/signup_scr'
import { APP_NAVIGATOR, AUTH_NAVIGATOR, STORAGE } from '../utils/constant'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Signin_scr from '../screens/signin_scr'
import Verify_scr from '../screens/verify_scr'
import NavigatorTemplate from '../templates/navigator_template'
import ResetPassword_Scr from '../screens/resetPassword_scr'
import LoadingData_Scr from '../screens/loading_scr'

export default function AuthNavigator(props) {

    const { navigation } = props

    useEffect(() => {
        AsyncStorage.getItem(STORAGE.isFirstLaunch).then(data => {
            if (data === null) {
                navigation.navigate(AUTH_NAVIGATOR.welcome)
            } else {
                AsyncStorage.getItem(STORAGE.userData).then(data => {
                    if (data === null) {
                        navigation.navigate(AUTH_NAVIGATOR.signin)
                    } else {
                        navigation.navigate(APP_NAVIGATOR.dashboardNavigator)
                    }
                })
            }
        })
    }, [])

    const navigatorList = [
        {
            name: AUTH_NAVIGATOR.welcome,
            comp: Welcome_scr,
        }, {
            name: AUTH_NAVIGATOR.signup,
            comp: Signup_scr,
        }, {
            name: AUTH_NAVIGATOR.signin,
            comp: Signin_scr,
        }, {
            name: AUTH_NAVIGATOR.verify,
            comp: Verify_scr,
        }, {
            name: AUTH_NAVIGATOR.resetPassword,
            comp: ResetPassword_Scr,
        },
    ]

    return (
        <NavigatorTemplate navigatorList={navigatorList} />
    )

}