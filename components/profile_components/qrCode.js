import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function QRCodeScan(props) {

  const { navigation } = props

  return (
    <View style={styles.container}>
      <SettingTemplate navigation={navigation} title={'QR Code'} isNoBackground={true} isWhiteArrow={true} titleStyle={{ color: COLORS.WHITE }}>
        <View style={styles.infoContainer}>
          <View style={styles.accountInfo}>
            <View style={styles.imgContainer}>
              <Image resizeMode='contain' style={styles.imgAvatar} source={require('../../assets/icons/app-logo.png')} />
            </View>
            <Text style={styles.accountName}>David Tran</Text>
          </View>
          <View style={styles.lineStyle} />
          <View style={{ alignItems: 'center' }}>
            <View style={styles.barCodeContainer}>
              <Image resizeMode='contain' style={styles.barCodeImg} source={require('../../assets/images/barcode.png')} />
            </View>
            <View style={styles.QRCodeContainer}>
              <Image resizeMode='contain' style={styles.QRCodeImg} source={require('../../assets/images/QR_code.png')} />
            </View>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.ideaContainer}>
            <Image style={styles.ideaStyle} resizeMode='contain' source={require('../../assets/icons/idea-icon.png')} />
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.textStyle}> Simply show the QR code and </Text>
          <Text style={styles.textStyle}> your friends can scan and tap! </Text>
          </View>
        </View>
      </SettingTemplate>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  infoContainer: {
    margin: 15,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
  },
  accountInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  imgAvatar: {
    width: 35,
    height: 35,
  },
  accountName: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_1,
    color: COLORS.PRIMARY,
  },
  lineStyle: {
    marginBottom: 20,
    width: '100%',
    height: 1,
    backgroundColor: COLORS.GRAY
  },
  barCodeImg: {
    width: 275,
    height: 70,
  },
  QRCodeImg: {
    width: 200,
    height: 200,
  },
  barCodeContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  QRCodeContainer: {
    marginTop: 30,
    marginBottom: 50,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  boxContainer: {
    padding: 10,
    margin: 15,
    borderRadius: 15,
    backgroundColor: COLORS.SECONDARY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.WHITE,
    fontFamily: ROBOTO_FONT.light,
    fontSize: FONT_SIZE.body_2,
  },
  ideaContainer: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ideaStyle: {
    width: 22,
    height: 22,
  },
  textContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  }
})