import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Information from '../components/events_components/information'
import Standing from '../components/events_components/standing'
import DashboardTemplate from '../templates/dashboard_templates'
import NavigatorTemplate from '../templates/navigator_template'
import { COLORS, EVENTS_NAVIGATOR, FONT_SIZE, ROBOTO_FONT } from '../utils/constant'

export default function EventsNavigator(props) {

  const navigatorList = [
    {
      name: EVENTS_NAVIGATOR.standing,
      comp: Standing,
    }, {
      name: EVENTS_NAVIGATOR.information,
      comp: Information
    }
  ]

  const [ selected, setSelected ] = useState(navigatorList[0].name)

  const handleOnPress = (selection) => {
    setSelected(selection)
    props.navigation.navigate(selection)
  }

  const twoSelection = () => (
    <View style={styles.selectionStyle}>
      {navigatorList.map(({name}) => (
        <View style={[styles.selection, name === selected ? styles.bottomLine : {}]}>
          <TouchableOpacity onPress={() => handleOnPress(name)}>
            <Text style={[styles.selectionText, { color: name === selected ? COLORS.BLACK : COLORS.GRAY }]}>{name[0].toUpperCase()}{name.slice(1,)}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )

  return (
    <DashboardTemplate {...props}>
      {twoSelection()}
      <NavigatorTemplate navigatorList={navigatorList} isGestureEnabled={false} />
    </DashboardTemplate>
  )
}

const styles = StyleSheet.create({
  selectionStyle:{
      minHeight: 40,
      borderBottomWidth: 1,
      borderColor: COLORS.GRAY,
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  selection:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  bottomLine:{
      flex: 1,
      borderBottomWidth: 3,
      borderColor: COLORS.PRIMARY,
  },
  selectionText:{
      fontFamily: ROBOTO_FONT.bold,
      fontSize: FONT_SIZE.headLine_1
  },
})