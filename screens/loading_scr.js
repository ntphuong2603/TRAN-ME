import React, { useEffect } from 'react'
import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import { COLORS } from '../utils/constant'
import appLogo from '../assets/icons/app-icon.png'

const RADIUS = 45
const WIDTH = 5

export default function LoadingData_Scr(props) {

  const rotateValue = new Animated.Value(0)

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 360 * 30,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        rotateValue.setValue(0)
        startAnimation()
      })
    ])
  }

  useEffect(() => {
    startAnimation()
  }, [])

  let rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const animatedStyle = { transform: [{ rotate: rotation }] }

  return (
    <>
      <View style={[styles.containerLogo, styles.container]}/>
      <View style={styles.containerLogo}>
        <View style={styles.logoContainer}>
        <Animated.View style={animatedStyle}>
            <Image style={styles.logo} resizeMode='contain' source={appLogo} />
            </Animated.View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // height: '100%',
    backgroundColor: COLORS.PRIMARY,
    opacity: 0.45,
  },
  containerLogo : {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: COLORS.WHITE,
    // opacity: 0.5,
  },
  logoContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.PRIMARY,
    borderWidth: WIDTH,
  },
  logo: {
    width: RADIUS * 2 - WIDTH,
    height: RADIUS * 2 - WIDTH,
  }
})