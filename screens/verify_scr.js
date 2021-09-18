import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, INPUT_FIELDS } from '../utils/constant';
import AccountTemplate from '../templates/account_template';
import CheckboxComp from '../components/other_components/checkbox_comp';
import { TRAN_ME } from '../components/other_components/constant_comp';

export default function Verify_scr (props) {

  const [showCode, setShowCode] = useState(false)

  const fields = [{
    ...INPUT_FIELDS.verfiCode,
    isSecure:!showCode, 
    bkIconPress: () => setShowCode(!showCode)
   }]

  const [isAgree, setIsAgree] = useState(false)
  
  const verifyBtn = {
    title : 'Next ...',
    disabled: !isAgree,
  }

  const handleVerify = (values) => {
    alert('Next btn is pressed!')
    // props.navigation.navigate('profile')
  }

  // const TRAN_ME = <Text style={{fontWeight:'bold', ...styles.textSize}}>TRAN ME</Text>

  const preCaution = 
    <Text style={{...styles.textSize, paddingTop: 50, paddingBottom: 25}}>
        Please enter the verification code that {TRAN_ME} has sent to your email address.
    </Text>

  const agreement = 
    <View>
      <Text style={styles.textSize}>
        I acknowledge that I have read, and to hereby accept the terms and condition provided by {TRAN_ME}
      </Text>
      <CheckboxComp
        isCheck={isAgree}
        onPress={()=>setIsAgree(!isAgree)}
        text={'Terms and conditions'}
        textStyle={{color: COLORS.PRIMARY}}
        style={{paddingTop: 15}}
      />
    </View>

  return(
    <AccountTemplate 
        screenTitle={'VERIFY'} 
        preCaution={preCaution}
        inputFields={fields} 
        beforeBtn={agreement}
        handleSubmit={handleVerify}
        submitButton={verifyBtn}
    />
  )
}

const styles = StyleSheet.create({
  // textSize:{
  //   fontSize: FONT_SIZE.body_3 - 1
  // },
  checkBox:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
})