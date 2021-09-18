import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../templates/settings_template'
import { COLORS, CREATWALLET_NAVIGATOR, FONT_SIZE, ROBOTO_FONT } from '../utils/constant'

export default function CreateWallet_scr(props) {

  const { navigation } = props

  const contentList = [
    "“Please write down your alphanumeric wording in the 8 boxes below on a piece of paper.”",
    "“Write the word in exact order from 1 to 8.”",
    "“Please store it in a safe place. Your 8 words seed will help you to restore your created wallet.”",
    "“DO NOT SHARE OR GIVE THIS INFORMATION TO ANYONE.  YOUR LOSS WILL BE SOMEONE’S GAIN.”",
  ]

  const seedList = ['','','','','','','','']
  
  const button = {
    title: 'Next',
    onPress: () => navigation.navigate(CREATWALLET_NAVIGATOR.verifySeed)
  }

  return (
    <SettingTemplate navigation={navigation} title={'Create wallet'} isShowRectangle={true} isShowButton={true} button={button}>
      <View>
        <Text style={styles.titleText}> SEED </Text>
        {contentList.map(text =>
          <View style={styles.textContainer}>
            <Text style={styles.contentText}> {text} </Text>
          </View>
        )}
        <View style={styles.seedContainer}> 
          {seedList.map(seed =>
            <View style={styles.seedInfoContainer}>
              <Text>{seed}</Text>
            </View>
          )}
        </View>
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
  },
  titleText: {
    color: COLORS.PRIMARY,
    fontFamily: ROBOTO_FONT.condense.bold,
    fontSize: FONT_SIZE.headLine_1,
  },
  textContainer: {
    paddingTop: 15,
  },
  contentText: {
    color: COLORS.BLACK,
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_3,
  },
  btnContainer:{
    marginBottom: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    borderColor: 'red',
    borderWidth: 1,
  },
  seedContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    marginTop: 35,
    marginBottom: 35,
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