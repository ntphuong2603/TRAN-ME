import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

const styles = StyleSheet.create({
  imgLogo: {
    width: 25,
    height: 25,
  },
  textContainer: {
    marginBottom: 15,
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: COLORS.DARK_GRAY,
    flex: 3,
    height: 1,
  },
  text: {
    color: COLORS.DARK_GRAY,
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.body_1,
  },
  textSize_TRAN_ME: {
    fontFamily: ROBOTO_FONT.black,
    fontSize: FONT_SIZE.body_3 - 1
  },
})

export const TRAN_ME = (color = COLORS.BLACK) => 
  <Text style={{ fontWeight: 'bold', ...styles.textSize_TRAN_ME, color: color }}>
    TRAN ME
  </Text>

export const TRAN_LOGO =
  <Image
    resizeMode='contain'
    style={styles.imgLogo}
    source={require('../../assets/icons/app-logo.png')}
  />

export const OR_COMPONENT =
  <View style={styles.textContainer}>
    <View style={styles.line} />
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.text}>OR</Text>
    </View>
    <View style={styles.line} />
  </View>

