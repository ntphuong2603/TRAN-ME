import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import RightArrow_Comp from './rightArrow_comp'
import TwoColsComp from './twoCols_comp'

export default function RenderList_Comp(props) {

  const { list, child } = props

  return (
    <View style={styles.itemContainer}>
      {list.map((item, index) => (
        <TouchableOpacity style={[index === 0 ? null : styles.topLine, styles.itemHeight]}
          onPress={() => navigation.navigate(item)}
        >
          <TwoColsComp
            leftComp={<Text style={styles.itemNameText}>{item[0].toUpperCase()}{item.slice(1,)}</Text>}
            leftStyle={{ flex: 3, justifyContent: 'center' }}
            rightComp={<RightArrow_Comp {...props} screenName={item} />}
          />
        </TouchableOpacity>
      ))}
      {child}
    </View>
  )
}

const styles = StyleSheet.create({
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
    height: 45,
    justifyContent: 'center'
  },
  itemNameText: {
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
})