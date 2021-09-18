import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SettingTemplate from '../templates/settings_template'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../utils/constant'
import { OR_COMPONENT, TRAN_LOGO } from '../components/other_components/constant_comp'
import SubcriptionButton from '../components/shop_components/subcriptionButton'

export default function Shop_scr(props) {

  const { navigation } = props

  const pagList = [
    {
      name: 'Started bag',
      value: 500,
    }, {
      name: 'Value bag',
      value: 2000,
    }, {
      name: 'FOMO bag',
      value: 5000,
    }, {
      name: 'HODL bag',
      value: 10000,
    }
  ]

  return (
    <SettingTemplate navigation={navigation} title={'Shop'} isShowRectangle={false}>
      <SubcriptionButton navigation={navigation} />
      {OR_COMPONENT}
      <View style={styles.constainer}>
        {pagList.map(pag =>
          <TouchableOpacity style={styles.bagContainer}>
            <Text style={styles.bagText}>{pag.name}</Text>
            {TRAN_LOGO}
            <Text style={styles.bagValue}>{pag.value}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  constainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  bagContainer:{
    width: 150,
    margin: 10,
    borderColor: COLORS.PRIMARY,
    borderWidth: 0.5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bagText:{
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_2,
  },
  bagValue:{
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_2,
  }
})