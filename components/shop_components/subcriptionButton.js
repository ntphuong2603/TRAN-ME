import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT, SHOP_NAVIGATOR } from '../../utils/constant'
import { TRAN_LOGO } from '../other_components/constant_comp'

export default function SubcriptionButton(props) {

  const { navigation } = props

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(SHOP_NAVIGATOR.subcription)}>
        <Image style={styles.shopCard} resizeMode='contain' source={require('../../assets/images/shopCard.png')} />
        <View style={styles.subContainer}>
          <Text style={styles.subText}> One time subcription </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}> $10 </Text>
        </View>
        <View style={styles.subInfoContainer}>
          <Text style={styles.subInfoText}> You will rewarded 500 {TRAN_LOGO}</Text>
          <Text style={styles.subInfoText}> with this subscription. </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  shopCard: {
    width: "100%",
    height: 205,
    shadowColor: COLORS.DARK_GRAY,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 5,
      height: 10,
    }
  },
  textContainer: {
    position: 'absolute',
    top: 25,
    right: 35,
  },
  textStyle: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.title_2,
  },
  subContainer: {
    flex: 1,
    position: 'absolute',
    top: 155,
    alignSelf: 'center',
  },
  subText: {
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
  },
  subInfoContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subInfoText: {
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.headLine_3,
    color: COLORS.PRIMARY
  }
})