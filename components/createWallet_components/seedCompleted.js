import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function SeedCompleted(props) {

  const { navigation } = props

  const warning = "“DO NOT SHARE OR GIVE THIS INFORMATION TO ANYONE.  YOUR LOSS WILL BE SOMEONE’S GAIN.”"

  const walletInfo =[
    {
      name: 'Private key',
      value: 'e6df1c1e5aac47d7c545cb5684c5526aaa7385df2ff534d690a7954929331ece'
    },{
      name: 'Public key',
      value: '',
    },{
      name: 'Wallet address',
      value: '04c6ee8fcead2bfd13d45d26bdbed94d8aab827f',
    }
  ]

  const button = {
    title: 'Done',
    onPress: () => alert('You press ALL DONE')
  }
  return(
    <SettingTemplate navigation={navigation} title={'Create wallet'} isShowRectangle={true} isShowButton={true} button={button}>
      <View>
        <Text style={styles.titleText}> SEED COMPLETED </Text>
        <View style={styles.textContainer}>
          <Text style={styles.warningText}> {warning} </Text>
        </View>
        {walletInfo.map(info =>
          <View style={styles.walletInfoContainer}>
              <Text style={styles.infoName}>{info.name}</Text>
              <View style={styles.walletInfo}>
                <Text style={styles.infoValue}>{info.value}</Text>
              </View>
          </View>
        )}
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
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
  warningText: {
    color: COLORS.WARNING,
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_3,
    textAlign:'center',
  },
  btnStyle:{
    height: 75,
    marginTop: 55,
  },
  walletInfoContainer:{
    justifyContent: 'space-around',
    paddingTop: 25,
  },
  infoName:{
    fontSize: FONT_SIZE.headLine_3,
    fontFamily: ROBOTO_FONT.bold,
  },
  infoValue:{
    fontSize: FONT_SIZE.body_3-2,
  },
  walletInfo:{
    borderColor: COLORS.GRAY,
    borderRadius: 15,
    borderWidth: 1.2,
    padding: 15,
  }
})