import React, { useEffect, useState } from 'react';
import { View,  StyleSheet,  Image } from 'react-native';
import { AUTH, DIMENSION } from '../utils/constant';

export default function Splash_scr (props) {

  const [splash2, setSplash2] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setSplash2(true)
    }, 1500);
  },[])

  useEffect(()=>{
    // console.log('Route:', props);
    props.navigation.navigate(AUTH[props.routeName])
  },[props.routeName])
  
  return(
    <View style={styles.container}>
      {!splash2 && 
          <Image style={styles.splash_image} source={require('../assets/images/splash2.png')}/>
      }
      {splash2 && 
        <Image style={styles.splash2_img} source={require('../assets/new_assets/splash2.png')}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: DIMENSION.height,
    borderColor:'red',
    borderWidth:0.5
  },
  splash_image: {
    width: '90%',
    height: 270
  },
  splash2_img: {
    flex: 1,
    width: '100%'
  }
})
