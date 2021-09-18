import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function WeeklyActivity(props) {

  const [selectedDay, setSelectedDay] = useState(null)

  const infoList = [
    {
      name: 'Walking',
      value: [
        {name: 'D', value: '763.17 m'},
        {name: 'C', value: '58.83 cal'},
        {name: 'T', value: '7.5 m'}
      ]
    },{
      name: 'Cycling',
      value: [
        {name: 'D', value: '0.00 m'},
        {name: 'C', value: '0.00 cal'},
        {name: 'T', value: '0.0 m'}
      ]
    },{
      name: 'Vehicle',
      value: [
        {name: 'D', value: '24.47 km'},
        {name: 'C', value: '53.04 cal'},
        {name: 'T', value: '2.0 m'}
      ]
    }
  ]

  const weekdays = () => (
    <View style={styles.weekdaysStyle}>
      {['Mon','Tue','Wed','Thu','Fri','Sun','Sat'].map(day=>(
        <TouchableOpacity style={[styles.daysStyle, selectedDay === day ? styles.bottomLine : {}]} onPress={()=>setSelectedDay(day)}>
          <Text style={[styles.weekdaysText, {color: selectedDay === day ? COLORS.PRIMARY : COLORS.GRAY}]}>{day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const infoValue = (value) => (
    <View style={styles.leftAlignText}>
      {value.map(each=>(
        <Text style={styles.valueStyle}>{each.name} {each.value}</Text>
      ))}
    </View>
  )
  
  const info = () => (
    <View style={styles.rowContainer}>
      {infoList.map(info=>(
        <View style={styles.colContainer}>
          <Text style={styles.nameStyle}>{info.name}</Text>
          {infoValue(info.value)}
        </View>
      ))}
    </View>
  )

  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Weekly activity</Text>
      <View style={styles.infoContainer}>
        {weekdays()}
        {selectedDay && info()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  textTitle:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.headLine_2,
    color: COLORS.BLACK,
    alignSelf: 'flex-start',
    paddingBottom: 15,
  },
  infoContainer:{
    minHeight: 160,
    borderRadius: 15,
    borderColor: COLORS.GRAY,
    borderWidth: 0.5,
  },
  weekdaysStyle:{
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY,
  },
  daysStyle:{
    minHeight: 30,
  },
  bottomLine:{
    borderBottomWidth: 3,
    borderBottomColor: COLORS.PRIMARY,
  },
  weekdaysText:{
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_3,
  },
  rowContainer:{
    paddingTop: 10,
    flexDirection: 'row',
  },
  colContainer:{
    flex: 1,
    alignItems:'center',
  },
  leftAlignText:{
    alignItems:'flex-start',
  },
  nameStyle:{
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_3,
    color: COLORS.PRIMARY,
    minHeight: 30,
  },
  valueStyle:{
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.headLine_3,
    minHeight: 25,
  }
})