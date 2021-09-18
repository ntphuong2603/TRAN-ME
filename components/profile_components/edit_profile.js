import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function EditProfile(props) {

  const { navigation } = props

  const button = {
    title: 'Save',
    onPress: () => alert('Save profile PRESS !!!')
  }
  return (
    <SettingTemplate navigation={navigation} title={'Edit profile'} isShowButton={true} button={button}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image resizeMode='contain' style={styles.imgAvatar} source={require('../../assets/icons/app-logo.png')} />
        </View>
        <TouchableOpacity style={styles.uploadPhoto}>
          <Image resizeMode='contain' style={styles.icon} source={require('../../assets/icons/camera_active.png')} />
          <Text style={styles.photoText}> Upload photo </Text>
        </TouchableOpacity>
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  imgAvatar: {
    width: 75,
    height: 75,
  },
  uploadPhoto:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    width:25,
    height: 25,
  },
  photoText:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_1,
    color: COLORS.PRIMARY,
  },
  nameText: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.body_1,
    color: COLORS.PRIMARY,
    height: 21,
  },
  emailText: {
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_3,
    color: COLORS.DARK_GRAY
  },
  infoContainer: {
    marginTop: 20,
    flexGrow: 1,
    backgroundColor: COLORS.PRIMARY,
    height: 90,
    width: '100%',
    borderRadius: 15,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    justifyContent: 'center'
  },
  infoStyle: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightBorder: {
    borderRightColor: COLORS.WHITE,
    borderRightWidth: 0.75,
    // borderStyle: 'dashed'
    // borderStyle: 'dotted',
  },
  infoValue: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.body_1,
    color: COLORS.WHITE,
  },
  infoName: {
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_2,
    color: COLORS.WHITE,
  },
  deviceContainer: {
    marginTop: 45,
    height: 200,
    width: '100%',
    borderRadius: 15,
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    justifyContent: 'space-evenly',
    paddingLeft: 25,
    paddingRight: 25,
  },
  topBorder: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    borderTopColor: COLORS.GRAY,
    borderTopWidth: 0.75,
  }
})