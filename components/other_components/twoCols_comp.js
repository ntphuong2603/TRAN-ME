import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function TwoColsComp({style, leftComp, leftStyle, rightComp, rightStyle }) {
  return(
    <View style={[styles.twoCols, style]}>
      <View style={[styles.leftCol, leftStyle]}>
        {leftComp}
      </View>
      <View style={[styles.rightCol, rightStyle]}>
        {rightComp}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  twoCols:{
    // flex: 1,
    // width: '100%',
    flexDirection:'row',
    // alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  leftCol:{
    flex: 1,
    alignItems: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  rightCol:{
    flex: 1,
    alignItems:'flex-end',
    // borderWidth: 1,
    // borderColor: 'red',
  }
})