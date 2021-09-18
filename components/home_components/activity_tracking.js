import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function ActivityTracking(props) {

  const [selectedAct, setSelectedAct] = useState(null)

  const activityList = [
    {
      name:'Walking',
      image: require('../../assets/icons/run-shoes.png')
    },{
      name:'Cycling',
      image:require('../../assets/icons/cycling.png')
    },{
      name:'Vehicle',
      image:require('../../assets/icons/car.png')
    }
  ]

  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Choose and start activity tracking</Text>
      <View style={styles.btnContainer}>
        {activityList.map(activity=>(
          <TouchableOpacity 
            style={[styles.activityButton, {backgroundColor: selectedAct === activity.name ? COLORS.GREEN : COLORS.ORANGE} ]} 
            onPress={()=>setSelectedAct(activity.name)}
          >
            <Image resizeMode='contain' style={styles.activityImage} source={activity.image}/>
            <Text style={styles.activityText}>{activity.name}</Text>
          </TouchableOpacity>
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
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.headLine_3,
    color: COLORS.DARK_GRAY,
    alignSelf: 'center',
    paddingBottom: 15,
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  activityButton:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 75,
    borderRadius: 15,
  },
  activityImage:{
    width: 35,
    height: 35,
  },
  activityText:{
    color: COLORS.WHITE,
    fontFamily: ROBOTO_FONT.condense.bold,
    fontSize: FONT_SIZE.headLine_3,
  }
})