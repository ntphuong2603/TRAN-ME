import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, DASHBOARD_NAVIGATOR, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant';
import { getCurrentBottomNavigation } from '../../utils/getNavigationName';
import getGreetingString from '../home_components/home_greeting';

export default function NotificationComp(props) {

  const { navigation } = props

  const routeName = getCurrentBottomNavigation({navigation}).currentNavigationName

  const { title, subTitle } = getGreetingString()

  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        { routeName === DASHBOARD_NAVIGATOR.home ?
            <>
            <Text style={styles.titleText}> { title[0].toUpperCase() }{ title.slice(1,)} </Text>
            <Text style={styles.subTitleText}> { subTitle } </Text>
            </>
          :
            <Text style={styles.titleText}> { routeName[0].toUpperCase() }{ routeName.slice(1,8)} </Text>
        }
      </View>
      <TouchableOpacity style={styles.notificationContainer} onPress={()=>navigation.navigate(DASHBOARD_NAVIGATOR.notification)}>
        <Image 
          resizeMode='contain' 
          style={styles.imgStyle} 
          source={require('../../assets/icons/notification.png')}
        />
        <View style={styles.showAlert}/>
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 35,
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    minHeight: 70,
    maxHeight: 70,
    margin: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  titleContainer:{
    justifyContent: 'space-around',
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  titleText:{
    fontFamily: ROBOTO_FONT.condense.bold,
    fontSize: FONT_SIZE.title_2,
  },
  subTitleText:{
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.headLine_3,
  },
  notificationContainer:{
    padding: 10,
  },
  imgStyle:{
    width: 22,
    height: 22,
  },
  showAlert:{
    width: 10,
    height: 10,
    borderRadius: 5,
    right: 10,
    top: 10,
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.ORANGE,
  }
})