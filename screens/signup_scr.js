import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AUTH_NAVIGATOR, COLORS, FONT_SIZE, INPUT_FIELDS, ROBOTO_FONT } from '../utils/constant';
import AccountTemplate from '../templates/account_template';

export default function Signup_scr (props) {

  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  const fields = [ 
    INPUT_FIELDS.email, 
    {
      ...INPUT_FIELDS.password,
      isSecure : !showPass,
      bkIconPress : () => setShowPass(!showPass)
    },{
      ...INPUT_FIELDS.confirmPassword,
      isSecure : !showConfirmPass,
      bkIconPress : () => setShowConfirmPass(!showConfirmPass)
    }
  ]
  
  const signupBtn = {
    title : 'Continue ...',
  }

  const handleSignup = (values) => {
    props.navigation.navigate(AUTH_NAVIGATOR.verify)
  }

  return(
    <AccountTemplate 
      screenTitle={'SIGN UP'} 
      inputFields={fields} 
      handleSubmit={handleSignup}
      submitButton={signupBtn}
    >
      <View style={styles.container}>
        <Text style={styles.info}>Already have an account ? </Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate(AUTH_NAVIGATOR.signin)}>
          <Text style={styles.signup}> Sign in now! </Text>
        </TouchableOpacity>
      </View>
    </AccountTemplate>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    color: COLORS.DARK_GRAY,
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
  },
  signup:{
    color: COLORS.PRIMARY,
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
  },
  seperator:{
    width:'100%',
  }
})