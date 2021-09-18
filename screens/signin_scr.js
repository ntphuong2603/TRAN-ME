import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AUTH_NAVIGATOR, COLORS, FONT_SIZE, INPUT_FIELDS, ROBOTO_FONT } from '../utils/constant'
import AccountTemplate from '../templates/account_template';
import TwoColsComp from '../components/other_components/twoCols_comp';
import CheckboxComp from '../components/other_components/checkbox_comp';
import AlternativeSigninComp from '../components/other_components/alternativeSingin_comp';
import { OR_COMPONENT } from '../components/other_components/constant_comp';

export default function Signin_scr (props) {

  const [isRemember, setIsRemember] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const fields = [ 
    INPUT_FIELDS.email, 
    {
      ...INPUT_FIELDS.password,
      isSecure: !showPass,
      bkIconPress: () => setShowPass(!showPass)
    }
  ]

  const handleLogin = (values) => {

  }

  const signinBtn = {
    title: 'Sign in',
  }

  const rememberMe = () => (
    <CheckboxComp 
      isCheck={isRemember} 
      onPress={()=>setIsRemember(!isRemember)}
      text={'Remember me'} 
      textStyle={styles.forgotText}
    />
  )

  const forgotPass = () => (
    <TouchableOpacity onPress={()=>alert('Forgotten your password?')}>
      <Text style={styles.forgotText}>Forgotten your password?</Text>
    </TouchableOpacity>
  )

  const beforeBtn = 
    <TwoColsComp
      leftComp={rememberMe()}
      leftStyle={{flex: 1}}
      rightComp={forgotPass()}
      rightStyle={{flex: 2}}
    />
  
  return(
    <AccountTemplate 
      screenTitle={'SIGN IN'} 
      inputFields={fields} 
      handleSubmit={handleLogin}
      submitButton={signinBtn}
      beforeBtn={beforeBtn}
    >
      {/* <View style={styles.textContainer}>
        <View style={styles.line}/>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.text}>OR</Text>
        </View>
        <View style={styles.line}/>
      </View> */}
      
      {OR_COMPONENT}

      <AlternativeSigninComp/>

      <View style={styles.container}>
        <Text style={styles.info}>Don't you have an account? </Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate(AUTH_NAVIGATOR.signup)}>
          <Text style={styles.signup}> Sign up now! </Text>
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
    color: COLORS.DARK_GRAY
  },
  signup:{
    color: COLORS.PRIMARY,
  },
  seperator:{
    width:'100%',
  },
  textContainer:{
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  line:{
    backgroundColor: COLORS.DARK_GRAY,
    flex: 3,
    height: 1,
  },
  text:{
    color: COLORS.DARK_GRAY,
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.body_1,
  },
  forgotText:{
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_2,
  }
})