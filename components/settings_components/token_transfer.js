import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import { TRAN_LOGO } from '../other_components/constant_comp'
import TwoColsComp from '../other_components/twoCols_comp'

export default function TokenTransfer(props) {

  const { navigation } = props

  const leftComp = 
    <View style={styles.compContainer}>
      <Text> Total distance </Text>
      <Image resizeMode='contain' style={styles.imgStyle} source={require('../../assets/icons/distance-icon.png')}/>
      <Text> 21.23 km </Text>
    </View>
  
  const rightComp = 
    <View style={styles.compContainer}>
      <Text> Total token </Text>
      <Image resizeMode='contain' style={styles.imgStyle} source={require('../../assets/icons/token-icon.png')}/>
      <Text> 9.6784 </Text>
    </View>

  const text = "How many tokens do you want to transfer to the Redbelly blockchain to convert to"

  const button = {
    title: 'Confirm',
    onPress: () => alert('Token confirm is pressed')
  }
  
  return(
    <SettingTemplate navigation={navigation} title={'Token transfer'} isShowButton={true} button={button}>
      <View style={styles.generalInfo}>
        <TwoColsComp
          leftComp={leftComp}
          rightComp={rightComp}
        />
      </View>
      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>{text} {TRAN_LOGO} ?</Text>
      </View>
      <View style={styles.tokenContainer}>
        <Text style={styles.tokenText}>Token</Text>
        <View style={styles.tokenBottomLine}/>
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  generalInfo: {
    marginTop: 30,
    margin: 10,
  },
  imgStyle:{
    width: 25,
    height: 25,
  },
  compContainer:{
    height: 100,
    width: 155,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 15,
  },
  compStyle:{
    alignItems: 'center',
  },
  rightStyle:{
    alignItems: 'center',
  },
  confirmContainer:{
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    margin: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  confirmText:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
    color: COLORS.PRIMARY,
  },
  tokenContainer:{
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  tokenText:{
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_1,
    color: COLORS.DARK_GRAY,
  },
  tokenBottomLine:{
    backgroundColor: COLORS.GRAY,
    width: '75%',
    height: 5,
    // borderColor: COLORS.PRIMARY,
    // borderWidth: 1,
    borderRadius: 2.5,
  },
  btnContainer:{
    height: 55,
    justifyContent: 'flex-end',
    // borderColor: 'red',
    // borderWidth: 1,
  }
})