import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { COLORS, CREATWALLET_NAVIGATOR, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function VerifySeed(props) {

  const { navigation } = props

  const text = "“Please repeat your seed wording in the exact order from 1 to 8 shown below.”"

  const warning = "“DO NOT SHARE OR GIVE THIS INFORMATION TO ANYONE.  YOUR LOSS WILL BE SOMEONE’S GAIN.”"

  const seedList = ['','','','','','','','']

  const button = {
    title:'Create',
    onPress: () => navigation.navigate(CREATWALLET_NAVIGATOR.seedCompleted)
  }

  return(
    <SettingTemplate navigation={navigation} title={'Create wallet'} isShowRectangle={true} isShowButton={true} button={button}>
      <View>
        <Text style={styles.titleText}> SEED CONFIRMATION </Text>
        <View style={styles.textContainer}>
          <Text style={styles.contentText}> {text} </Text>
        </View>
        <View style={styles.confirmSeedBox}>

        </View>
        <View style={styles.textContainer}>
          <Text style={styles.warningText}> {warning} </Text>
        </View>
        <View style={styles.seedContainer}> 
          {seedList.map(seed =>
            <View style={styles.seedInfoContainer}>
              <Text>{seed}</Text>
            </View>
          )}
        </View>
        {/* <View style={styles.btnStyle}>
          <ButtonComp
            title={'Create'}
            onPress={()=>navigation.navigate(CREATWALLET_NAVIGATOR.seedCompleted)}
          />
        </View> */}
        
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  // backgroundImg: {
  //   flex: 1,
  // },
  // container: {
  //   margin: 15,
  // },
  titleText: {
    color: COLORS.PRIMARY,
    fontFamily: ROBOTO_FONT.condense.bold,
    fontSize: FONT_SIZE.headLine_1,
  },
  textContainer: {
    paddingTop: 15,
    // justifyContent: 'center',
  },
  contentText: {
    color: COLORS.BLACK,
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
    // textAlign: 'center'
  },
  warningText: {
    color: COLORS.WARNING,
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_3,
    textAlign: 'center'
  },
  btnStyle:{
    height: 75,
    // justifyContent:'flex-end',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  confirmSeedBox:{
    height: 125,
    borderColor: COLORS.GRAY,
    borderWidth: 1.2,
    borderRadius: 15,
  },
  seedContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
    height: 250,
  },
  seedInfoContainer:{
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.PRIMARY,
    height: 35,
    width: 155,
  },
})