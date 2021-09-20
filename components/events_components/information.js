import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EVENTS_INFORMATION_NAVIGATOR } from '../../utils/constant'
import RenderList_Comp from '../other_components/renderList_comp'

export default function Information(props) {

  const navigatorList = [
    {
      name: EVENTS_INFORMATION_NAVIGATOR.createTeam,
    }, {
      name: EVENTS_INFORMATION_NAVIGATOR.createMember,
    }, {
      name: EVENTS_INFORMATION_NAVIGATOR.addMember,
    }, {
      name: EVENTS_INFORMATION_NAVIGATOR.createLeague,
    }, {
      name: EVENTS_INFORMATION_NAVIGATOR.manageMember,
    }
  ]

  return (
    <View style={styles.container}>
      <RenderList_Comp list={navigatorList.map(item=>item.name)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 15,
    marginTop: 50,
  }
})