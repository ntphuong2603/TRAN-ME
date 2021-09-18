import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonComp from '../components/other_components/button_comp'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../utils/constant'
import SettingTemplate from '../templates/settings_template'

export default function Notification_scr(props) {

  const { navigation } = props

  const friendList = [
    {
      name: 'Alex Dang',
      time: '2 minutes'
    },{
      name: 'Linh Dang',
      time: '12 hours'
    }
  ]

  const RenderItem = (item) => (
    <View style={styles.itemContainer}>
      <Text style={styles.friendText}>{item.name} wants to be your friend</Text>
      <Text style={styles.timeText}>{item.time} ago</Text>
      <View style={styles.btnContainer}>
        <View style={{flex: 10}}>
        <ButtonComp title='Accept' />
        </View>
        <View style={{flex:1}}/>
        <View style={{flex: 10}}>
        <ButtonComp title='Decline' />
        </View>
      </View>
    </View>
  )

  return(
    <SettingTemplate navigation={navigation} title={'Notification'} isShowTrash={true}>
      <View style={{marginTop: 30}}>
      {friendList.map(item=>(
        RenderItem(item)
      ))}
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    // flex: 1,
    borderRadius: 5,
    borderColor: COLORS.GRAY,
    borderWidth: 0.5,
    margin: 10,
    padding: 15,
    backgroundColor: COLORS.WHITE,
  },
  friendText:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2
  },
  timeText:{
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_3,
    color: COLORS.GRAY,
    marginTop: 10,
    marginBottom: 10,
  },
  btnContainer:{
    flexGrow: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 5,
  }
})