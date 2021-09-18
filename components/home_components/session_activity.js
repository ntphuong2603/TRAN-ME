import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import TwoColsComp from '../other_components/twoCols_comp'

export default function SessionActivity(props) {

  const LeftSession = () => (
    <View style={styles.leftSession}>
      <Text style={styles.leftSessionTitle}>Session activity</Text>
      <Image
        resizeMode='contain'
        style={styles.standbymanImage}
        source={require('../../assets/icons/humanStand.png')} 
      />
    </View>
  )

  const RightInfo = () => (
    <>
      <Text style={styles.rightSessionText}> Distance </Text>
      <Text style={styles.rightSessionValue}> 0.00 m </Text>
    </>
  )

  const RightSession = () => (
    <View style={styles.rightSession}>
      <TwoColsComp
        leftComp={<RightInfo />}
        leftStyle={{ alignItems: 'center' }}
        rightComp={<RightInfo />}
        rightStyle={{ alignItems: 'center' }}
      />
      <TwoColsComp
        leftComp={<RightInfo />}
        leftStyle={{ alignItems: 'center' }}
        rightComp={<RightInfo />}
        rightStyle={{ alignItems: 'center' }}
      />

    </View>
  )

  return (
    <View style={styles.sessionActivity}>
      <TwoColsComp
        leftComp={<LeftSession />}
        leftStyle={{
          alignItems: 'center',
          borderRightWidth: 1,
          borderRightColor: COLORS.WHITE,
        }}
        rightComp={<RightSession />}
        rightStyle={{ alignItems: 'center' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sessionActivity: {
    width: '100%',
    minHeight: 110,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 15,
    justifyContent: 'center',
  },
  leftSession: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  leftSessionTitle: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.body_2,
    color: COLORS.WHITE,
  },
  rightSession: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSessionText: {
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_3,
    color: COLORS.WHITE,
  },
  rightSessionValue: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.body_2,
    color: COLORS.WHITE,
  },
  standbymanImage: {
    width: 45,
    height: 45,
  }
})