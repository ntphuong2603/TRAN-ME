import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import ShowCameraComp from '../other_components/showCamera_comp'

export default function ShowCamera(props) {

  // const { navigation } = props

  const CORNER = {
    Radius: 20,
    Width: 10,
    Color: COLORS.BLACK,
  }

  const corner = (isTop = 0, isLeft = 0 ) => {
    const top_bottom = [ 'Top', 'Bottom']
    const left_right = [ 'Left', 'Right']

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
      [`border${top_bottom[isTop]}${left_right[isLeft]}Radius`]:cornerRadius[`border${top_bottom[isTop]}${left_right[isLeft]}Radius`],
      [`border${top_bottom[isTop]}Width`] : cornerWidth[`border${top_bottom[isTop]}Width`],
      [`border${left_right[isLeft]}Width`] : cornerWidth[`border${left_right[isLeft]}Width`],
      [`border${top_bottom[isTop]}Color`] : cornerColor[`border${top_bottom[isTop]}Color`],
      [`border${left_right[isLeft]}Color`] : cornerColor[`border${left_right[isLeft]}Color`],
    }

    return cornerStyle
  }

  return (
    <ShowCameraComp {...props} title={'Camera'} text={'Hold your device to capture your card'}/>
    // <SettingTemplate navigation={navigation} title={'Camera'} isShowRectangle={false} isShowCamera={false}>
    //   {/* <View style={styles.container}> */}
    //     {/* <View style={styles.cameraView}> */}
    //       {/* <Text>something</Text> */}
    //       <CameraComp/>
    //       {/* <View style={{...corner(0,0)}}/>
    //       <View style={{...corner(0,1)}}/>
    //       <View style={{...corner(1,0)}}/>
    //       <View style={{...corner(1,1)}}/> */}
    //       <Text style={styles.cameraText}> Hold your device to capture your card</Text>
    //     {/* </View> */}
    //   {/* </View> */}
    // </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraView: {
    width: '95%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRight:{
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