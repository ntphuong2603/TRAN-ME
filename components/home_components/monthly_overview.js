import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'
import TwoColsComp from '../other_components/twoCols_comp'

export default function MonthlyOverview(props) {

  const infoList = [
    {
      name: 'Walking',
      value: '0.0 km',
    },{
      name: 'Cycling',
      value: '0.0 cal'
    },{
      name: 'Vehicle',
      value: '0 m'
    }
  ]

  const Legend = () => (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.legend}>
        <View style={[styles.legendBar, styles.calorieBar]}/>
        <Text>Calorie</Text>
      </View>
      <View style={styles.legend}>
        <View style={[styles.legendBar, styles.tokenBar]}/>
        <Text>Tokens</Text>
      </View>
    </View>
  )
  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TwoColsComp
          leftComp={<Text style={styles.textTitle}>Monthly overview</Text>}
          rightComp={<Legend/>}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text> Graph activities </Text>
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
  titleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    // borderColor: 'red',
    // borderWidth: 1,
  },  
  textTitle:{
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_2,
    color: COLORS.BLACK,
    alignSelf: 'flex-start',
  },
  legendBar: {
    height: 6,
    width: 16,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  calorieBar:{
    backgroundColor: COLORS.PRIMARY,
  },
  tokenBar:{
    backgroundColor: COLORS.GREEN,
  },
  legend:{
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 10,
  },
  infoContainer:{
    minHeight: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: COLORS.GRAY,
    borderWidth: 0.5,
  },
})