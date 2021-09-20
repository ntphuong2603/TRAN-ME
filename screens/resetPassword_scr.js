import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AccountTemplate from '../templates/account_template'
import SettingTemplate from '../templates/settings_template'
import { FONT_SIZE, INPUT_FIELDS, ROBOTO_FONT } from '../utils/constant'

export default function ResetPassword_Scr(props) {

  const beforeBtn = 
    <Text style={styles.text}>
      Enter the email address associated with your account and we’ll send an email with instructions to reset your password.
    </Text>

  return(
    <SettingTemplate navigation={props.navigation} title={'Reset Password'} isRectangleOnly={true}>
      <AccountTemplate 
        isRectangleOnly={true}
        inputFields={[INPUT_FIELDS.email]}
        // handleSubmit={handleLogin}
        submitButton={{title:'Reset'}}
        beforeBtn={beforeBtn}
      />
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  text:{
    fontFamily : ROBOTO_FONT.regular,
    fontSize : FONT_SIZE.body_2,
  }
})