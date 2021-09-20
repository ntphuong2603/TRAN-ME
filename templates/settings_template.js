import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonComp from '../components/other_components/button_comp'
import HOC_Background from '../components/other_components/hoc_bg'
import TwoColsComp from '../components/other_components/twoCols_comp'
import { COLORS, FONT_SIZE, PROFILE_NAVIGATOR, ROBOTO_FONT, SHOP_NAVIGATOR } from '../utils/constant'

export default function SettingTemplate(props) {

  const { navigation, title, button } = props
  const { isShowQRCode, isShowCamera, isShowButton, isShowTrash, isWhiteArrow } = props
  const { isRectangleOnly, isShowRectangle, isNoBackground } = props
  const { titleStyle } = props

  const BackArrow = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {isWhiteArrow ? 
        <Image resizeMode='contain' style={styles.backArrow} source={require('../assets/icons/chevron_left_white.png')} />
      :
        <Image resizeMode='contain' style={styles.backArrow} source={require('../assets/icons/chevron_left.png')} />
      }
    </TouchableOpacity>
  )

  const ShowCameraBtn = () => (
    <>
      {isShowCamera &&
        <TouchableOpacity onPress={() => navigation.navigate(SHOP_NAVIGATOR.showCamera)}>
          <Image style={styles.rightIcon} source={require('../assets/icons/camera.png')} />
        </TouchableOpacity>}
    </>
  )

  const ShowQRCodeScanBtn = () => (
    <>
      {isShowQRCode &&
        <TouchableOpacity onPress={() => navigation.navigate(PROFILE_NAVIGATOR.qrCodeScan)}>
          <Image style={styles.rightIcon} source={require('../assets/icons/qrIcon.png')} />
        </TouchableOpacity>}
    </>
  )

  const ShowTrashBtn = () => (
    <>
      {isShowTrash && 
        <TouchableOpacity onPress={() => { alert('Trash Press!') }}>
          <Image style={styles.rightIcon} source={require('../assets/icons/trash-icon.png')} />
        </TouchableOpacity>}
    </>
  )

  const TitleBar = () => (
    <TwoColsComp
      leftComp={<BackArrow />}
      rightComp={
        <TwoColsComp
          leftComp={<Text style={[styles.titleText, titleStyle]}> {title} </Text>}
          leftStyle={{ flex: 3, alignItems: 'center', }}
          rightComp={
            <>
              <ShowQRCodeScanBtn />
              <ShowCameraBtn />
              <ShowTrashBtn />
            </>
          }
        />
      }
      rightStyle={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}
    />
  )

  return (
    <HOC_Background isShowRectangle={isShowRectangle} isNoBackground={isNoBackground} isRectangleOnly={isRectangleOnly}>
      <View style={styles.container}>
        <TitleBar />
        <View style={styles.viewContainer}>
          <View>
            {props.children}  
          </View>
          {isShowButton && 
            <View style={styles.btnContainer}>
              <ButtonComp
                title={button.title}
                onPress={button.onPress}
              />
            </View>
          }
        </View>
      </View>
    </HOC_Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  viewContainer: {
    width: '95%',
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  titleText: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_1,
    color: COLORS.BLACK,
  },
  rightIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  backArrow: {
    width: 25,
    height: 25,
    margin: 10,
  },
  btnContainer: {
    marginBottom: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  trashIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  }
})