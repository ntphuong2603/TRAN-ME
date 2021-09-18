import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function DailyChallenge(props) {

  const infoList = [
    {
      name: 'Distance',
      value: '0.0 km',
    },{
      name: 'Calories',
      value: '0.0 cal'
    },{
      name: 'Time',
      value: '0 m'
    }
  ]
  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Daily challenge</Text>
      <View style={styles.infoContainer}>
        {infoList.map(info=>(
          <View style={styles.colContainer} >
            <Text style={styles.nameStyle}>{info.name}</Text>
            <Text style={styles.valueStyle}>{info.value}</Text>
          </View>
        ))}
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
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_2,
    color: COLORS.BLACK,
    alignSelf: 'flex-start',
    paddingBottom: 15,
  },
  infoContainer:{
    minHeight: 70,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: COLORS.GRAY,
    borderWidth: 0.5,
  },
  colContainer:{
    alignItems:'center',
  },
  nameStyle:{
    fontFamily: ROBOTO_FONT.black,
    fontSize: FONT_SIZE.headLine_3,
    color: COLORS.PRIMARY,
  },
  valueStyle:{
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.headLine_3,
  }
})