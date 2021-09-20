import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function RightArrow_Comp(props) {

  const { navigation, screenName } = props

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Image resizeMode='contain' style={styles.rightArrow} source={require('../../assets/icons/chevron_right.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rightArrow:{
    width: 20,
    height: 20,
    margin: 10,
  }
})