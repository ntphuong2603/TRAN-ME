import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant'

export default function CameraComp(props) {

  const [cameraPermission, setCameraPermission] = useState(false)

  const getPermission = () => {
    Camera.requestCameraPermissionsAsync().then(result=>{
      return result.granted
    })
  }

  useEffect( () => {
    Camera.getCameraPermissionsAsync().then(data=>{
      if (!data.granted){
        setCameraPermission(getPermission())
      } else {
        setCameraPermission(true)
      }
    })
  }, [])

  if (!cameraPermission) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> setCameraPermission(getPermission())}>
          <Text> Camera permission deneied !</Text>
          <Text> Try again. </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  camera:{
    width: '95%',
    height: '90%',
  },
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraText: {
    fontFamily: ROBOTO_FONT.bold,
    fontSize: FONT_SIZE.headLine_3,
    color: COLORS.DARK_GRAY,
    marginTop: 25,
  },
})