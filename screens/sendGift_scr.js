import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SettingTemplate from '../templates/settings_template'
import { FONT_SIZE, ROBOTO_FONT, SENDGIFT_NAVIGATOR } from '../utils/constant'
import InputComp from '../components/other_components/input_comp'
import TwoColsComp from '../components/other_components/twoCols_comp'

export default function SendGift_scr(props) {

  const { navigation } = props

  const button = {
    title: 'Send',
    onPress: () => alert('Send gift button pressed!')
  }

  // const infoList = [
  //   {
  //     text: 'Your wallet address',
  //     address: '1ad5566fe61436e556n5lik566d6'
  //   }, {
  //     text: 'Your destination wallet address',
  //     address: '1ad5566fe61436e556n5lik566d6'
  //   }, {
  //     text: 'Amount',
  //     address: ''
  //   }
  // ]

  return (
    <SettingTemplate navigation={navigation} title={'Send gift'} isShowRectangle={false} isShowButton={true} button={button}>
      {/* {infoList.map(info => (
        <>
          <Text style={styles.textStyle}> {info.text} </Text>
          <InputComp 
            value={info.address}
          />
        </>
      ))} */}
      <View style={{marginTop: 30}}>
        <Text style={styles.textStyle}> Your wallet address </Text>
        <InputComp
          value='1ad5566fe61436e556n5lik566d6'
        />
        <TwoColsComp
          leftComp={<Text style={styles.textStyle}> Your destination wallet address </Text>}
          leftStyle={{flex: 5}}
          rightComp={
            <TouchableOpacity onPress={() => navigation.navigate(SENDGIFT_NAVIGATOR.showCamera)}>
              <Image style={styles.rightIcon} source={require('../assets/icons/camera.png')} />
            </TouchableOpacity>
          }
        />
        <InputComp
          value='1ad5566fe61436e556n5lik566d6'
        />
        <Text style={styles.textStyle}> 'Amount' </Text>
        <InputComp
          value='32.5'
        />
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
  },
  rightIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
})