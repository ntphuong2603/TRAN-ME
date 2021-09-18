import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DashboardTemplate from '../templates/dashboard_templates'
import { COLORS, FONT_SIZE, ROBOTO_FONT, SETTINGS_NAVIGATOR } from '../utils/constant'
import TwoColsComp from '../components/other_components/twoCols_comp'

export default function Settings_scr(props) {

  const { navigation } = props

  const rightArrow = (screenName) => (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Image resizeMode='contain' style={styles.rightArrow} source={require('../assets/icons/chevron_right.png')}/>
    </TouchableOpacity>
  )

  const Account = () => {

    const accountInfo = () => (
      <View style={styles.accountContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.accountImg} source={require('../assets/icons/profile-icon.png')} />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>David Tran</Text>
          <Text style={styles.accountEmail}>support@3co.network</Text>
        </View>
      </View>
    )

    return (
      <TwoColsComp
        style={{ paddingBottom: 35 }}
        leftComp={accountInfo()}
        leftStyle={{ flex: 3 }}
        rightComp={rightArrow(SETTINGS_NAVIGATOR.profileNavigator)}
      />
    )
  }

  const renderItem = ({ list, child }) => (
    <View style={styles.itemContainer}>
      {list.map((item, index) => (
        <TouchableOpacity style={[index === 0 ? null : styles.topLine, styles.itemHeight]}
          onPress={() => navigation.navigate(item)}
        >
          <TwoColsComp
            leftComp={<Text style={styles.itemNamText}>{item}</Text>}
            leftStyle={{ flex: 3, justifyContent: 'center' }}
            rightComp={rightArrow(item)}
          />
        </TouchableOpacity>
      ))}
      {child}
    </View>
  )

  const LogoutBtn = () => (
    <TouchableOpacity onPress={() => alert('Logout press !')}>
      <Text style={styles.logoutText}>Log Out</Text>
    </TouchableOpacity>
  )

  const firstList = [
    SETTINGS_NAVIGATOR.createWalletNavigator,
    SETTINGS_NAVIGATOR.tokenTransfer,
    SETTINGS_NAVIGATOR.transferHistory,
    SETTINGS_NAVIGATOR.shopNavigator,
    SETTINGS_NAVIGATOR.sendGiftNavigator,
  ]

  const secondList = [
    SETTINGS_NAVIGATOR.changePass,
    SETTINGS_NAVIGATOR.addFriend,
    SETTINGS_NAVIGATOR.language,
  ]

  return (
    <DashboardTemplate {...props}>
      <Account />
        {renderItem({ list: firstList })}
        <View style={ styles.itemHeight } />
        {renderItem({ list: secondList, child: <LogoutBtn /> })}
    </DashboardTemplate>
    // <View style={styles.container}>
    //   <View style={styles.screenView}>
    //     {/* <NotificationComp title={'Settings'} /> */}
    //     <Account />
    //     {renderItem({ list: firstList })}
    //     <View style={ styles.itemHeight } />
    //     {renderItem({ list: secondList, child: <LogoutBtn /> })}
    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
  },
  screenView: {
    flex: 1,
    width: '95%',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountImg: {
    width: 40,
    height: 40,
  },
  accountInfo: {
    paddingLeft: 10,
  },
  accountName: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_2,
    color: COLORS.PRIMARY,
  },
  accountEmail: {
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_3,
    color: COLORS.DARK_GRAY,
  },
  itemContainer: {
    borderWidth: 0.7,
    borderRadius: 15,
    borderColor: COLORS.GRAY,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  topLine: {
    borderTopColor: COLORS.GRAY,
    borderTopWidth: 1,
  },
  itemHeight: {
    height: 43,
    justifyContent: 'center'
  },
  itemNamText: {
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.headLine_2,
    color: COLORS.BLACK
  },
  logoutText: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_1,
    color: COLORS.PRIMARY,
    textAlign: 'center'
  },
  rightArrow:{
    width: 20,
    height: 20,
    margin: 10,
    // ma:10,
  }
})