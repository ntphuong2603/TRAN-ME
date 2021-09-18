import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import CameraComp from '../other_components/camera_comp'
import SettingTemplate from '../../templates/settings_template'

export default function ShowCameraComp(props) {

  const { navigation, title, text } = props

  const CORNER = {
    Radius: 20,
    Width: 10,
    Color: COLORS.BLACK,
  }

  const corner = (isTop = 0, isLeft = 0) => {
    const top_bottom = ['Top', 'Bottom']
    const left_right = ['Left', 'Right']

    const cornerRadius = {
      borderTopLeftRadius: CORNER.Radius,
      borderTopRightRadius: CORNER.Radius,
      borderBottomLeftRadius: CORNER.Radius,
      borderBottomRightRadius: CORNER.Radius,
    }

    const cornerWidth = {
      borderTopWidth: CORNER.Width,
      borderBottomWidth: CORNER.Width,
      borderLeftWidth: CORNER.Width,
      borderRightWidth: CORNER.Width,
    }

    const cornerColor = {
      borderTopColor: CORNER.Color,
      borderBottomColor: CORNER.Color,
      borderLeftColor: CORNER.Color,
      borderRightColor: CORNER.Color,
    }

    const cornerStyle = {
      position: 'absolute',
      bottom: isTop ? 0 : null,
      right: isLeft ? 0 : null,
      left: isLeft ? null : 0,
      top: isTop ? null : 0,
      height: '15%',
      width: '10%',
      [`border${top_bottom[isTop]}${left_right[isLeft]}Radius`]: cornerRadius[`border${top_bottom[isTop]}${left_right[isLeft]}Radius`],
      [`border${top_bottom[isTop]}Width`]: cornerWidth[`border${top_bottom[isTop]}Width`],
      [`border${left_right[isLeft]}Width`]: cornerWidth[`border${left_right[isLeft]}Width`],
      [`border${top_bottom[isTop]}Color`]: cornerColor[`border${top_bottom[isTop]}Color`],
      [`border${left_right[isLeft]}Color`]: cornerColor[`border${left_right[isLeft]}Color`],
    }

    return cornerStyle
  }

  return (
    <SettingTemplate navigation={navigation} title={title} isShowRectangle={false} isShowCamera={false}>
      {/* <View style={styles.container}> */}
        <CameraComp />
        {/* <View style={{ ...corner(0, 0) }} />
        <View style={{ ...corner(0, 1) }} />
        <View style={{ ...corner(1, 0) }} />
        <View style={{ ...corner(1, 1) }} /> */}
      {/* </View> */}
      <Text style={styles.cameraText}> {text} </Text>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cameraView: {
    width: '95%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '15%',
    width: '12%',
    borderTopLeftRadius: 20,
    borderLeftWidth: 12,
    borderLeftColor: COLORS.BLACK_PURE,
    borderTopWidth: 12,
    borderTopColor: COLORS.BLACK,
  },
  cameraText: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_3,
    color: COLORS.DARK_GRAY,
    marginTop: 15,
    textAlign: 'center'
  },
})