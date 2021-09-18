import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'

export default function AddCard(props) {

  const { navigation } = props

  const button = {
    title: 'Add card',
    onPress: () => alert('Save credit card pressed!')
  }

  return (
    <SettingTemplate navigation={navigation} title={'Add card'} isShowRectangle={false} isShowCamera={true} isShowButton={true} button={button}>
      <Image style={styles.cardImg} resizeMode='contain' source={require('../../assets/images/visa-card.png')} />
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  cardImg: {
    width: '100%',
    height: "55%",
    // borderColor: 'blue',
    // borderWidth: 2,
    // padding: 10,
  }
})