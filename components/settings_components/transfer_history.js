import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import TwoColsComp from '../other_components/twoCols_comp'

export default function TransferHistory(props) {

  const { navigation } = props

  const itemName = ['hash', 'date', 'time', 'volume', 'AUD']

  const historyList = [
    {
      hash: 'rzd5566fe61436e556n5lik566....',
      date: '01/08/2021',
      time: '8:15 PM',
      volume: '5103.123145 3CO',
      AUD: '$11.3',
    }, {
      hash: 'rzd5566fe61436e556n5lik566....',
      date: '01/08/2021',
      time: '8:15 PM',
      volume: '5103.123145 3CO',
      AUD: '$11.3',
    }, {
      hash: 'rzd5566fe61436e556n5lik566....',
      date: '01/08/2021',
      time: '8:15 PM',
      volume: '5103.123145 3CO',
      AUD: '$11.3',
    }
  ]

  return (
    <SettingTemplate navigation={navigation} title={'Transfer history'} isShowRectangle={true} >
      <View>
      <ScrollView>
      {historyList.map(item => (
        <View style={styles.itemContainer}>
          {itemName.map(name => (
            <TwoColsComp
              style={{ paddingTop: 5, paddingBottom: 5, }}
              leftComp={<Text style={styles.nameText}>{name[0].toUpperCase() + name.slice(1,)}</Text>}
              rightComp={<Text style={styles.valueText}>{item[name]}</Text>}
              rightStyle={{ flex: 4, alignItems: 'flex-start' }}
            />
          ))}
        </View>
      ))}
      </ScrollView>
      </View>
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
  },
  nameText: {
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_3,
  },
  valueText: {
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_3,
  }
})