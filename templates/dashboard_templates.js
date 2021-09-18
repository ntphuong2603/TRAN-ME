import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function DashboardTemplate(props) {

  return (
    <View style={styles.container}>
      <View style={styles.screenView}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  screenView: {
    flex: 1,
    width: '95%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
})