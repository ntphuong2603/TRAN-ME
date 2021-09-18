import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../templates/settings_template'
import { COLORS, FONT_SIZE, PROFILE_NAVIGATOR, ROBOTO_FONT } from '../utils/constant'
import TwoColsComp from '../components/other_components/twoCols_comp'

export default function Profile_scr(props) {

  const { navigation } = props

  const list = [
    {
      name: 'Model no.',
      value: '242 864 932'
    }, {
      name: 'Serial no.',
      value: '#A3H1234'
    }, {
      name: 'IMEI',
      value: 'SF45 2342 5688'
    }, {
      name: 'D.O.B',
      value: 'Mar 1970'
    }
  ]

  const profileInfo = () => {
    const leftComp =
      <View style={styles.infoStyle}>
        <Text style={styles.infoName}>My Height</Text>
        <Text style={styles.infoValue}>182 cm</Text>
      </View>

    const rightComp =
      <View style={styles.infoStyle}>
        <Text style={styles.infoName}>My Weight</Text>
        <Text style={styles.infoValue}>99 kg</Text>
      </View>

    return (
      <TwoColsComp
        style={{ flex: 1 }}
        leftComp={leftComp}
        leftStyle={{ alignItems: 'center', justifyContent: 'center', ...styles.rightBorder }}
        rightComp={rightComp}
        rightStyle={{ alignItems: 'center', justifyContent: 'center' }}
      />
    )
  }

  const generalInfo = () => (
    list.map((item, index) => (
      <TwoColsComp
        key={index}
        style={[{ flex: 1 }, index === 0 ? null : styles.topBorder]}
        leftComp={<Text>{item.name}</Text>}
        leftStyle={{justifyContent:'center'}}
        rightComp={<Text>{item.value}</Text>}
        rightStyle={{justifyContent:'center'}}
      />
    ))
  )

  function GeneralContent(props) {
    return (
      <>
        <View style={styles.imgContainer}>
          <Image resizeMode='contain' style={styles.imgAvatar} source={require('../assets/icons/app-logo.png')} />
        </View>
        <Text style={styles.nameText}> David Tran </Text>
        <Text style={styles.emailText}> dtran21@3co.network </Text>
        <Text style={styles.emailText}> Maine, California </Text>
        <View style={styles.infoContainer}>
          {profileInfo()}
        </View>
        <View style={styles.deviceContainer}>
          {generalInfo()}
        </View>
      </>
    )
  }

  const button = {
    title: 'Edit profile',
    onPress: () => navigation.navigate(PROFILE_NAVIGATOR.editProfile)
  }

  return (
    <SettingTemplate navigation={navigation} title={'Profile'} isShowRectangle={false} isShowQRCode={true} isShowButton={true} button={button}>
      <View style={styles.container}>
        <GeneralContent />
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