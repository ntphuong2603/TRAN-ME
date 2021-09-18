import React, { useState } from 'react'
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DIMENSION, STORAGE, ROBOTO_FONT, AUTH_NAVIGATOR } from '../utils/constant';
import WalkthroughComp from '../components/other_components/walkthrough_comp';
import PaginationIndicator from '../components/other_components/pageIndicator';
import HOC_Background from '../components/other_components/hoc_bg';

export default function Welcome_scr (props) {

  const { navigation } = props

  const [index, setIndex] = useState(0)

  useEffect(()=>{
    AsyncStorage.setItem(STORAGE.isFirstLaunch, JSON.stringify(true))
  },[])


  const WelcomeHeader = () => {
    return(
      <View style={styles.containerSignInHeader}>
        <HOC_Background>
          <WalkthroughComp index={index}/>
        </HOC_Background>
      </View>
    )
  }
  
  const WelcomeBody = () => {
    return(
      <View style={styles.containerSignInBody}>
        <PaginationIndicator length={3} current={index}/>
      </View>
    )
  }

  const RightButton = () => {
    return(
      <View style={styles.topNavigationRight}>
         <TouchableOpacity
          style={styles.button}
          onPress={() => { index === 2 ? navigation.navigate(AUTH_NAVIGATOR.signin) : setIndex(index + 1) }}
        >
          <Text style={styles.text}>
            {index === 2 ? 'Done' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const LeftButton = () => {
    return(
      <View style={[styles.topNavigationLeft]}>
        <TouchableOpacity
          style={styles.button}
          onPress={ () => navigation.navigate(AUTH_NAVIGATOR.signin) }
        >
          <Text style={styles.text}>
            {index === 2 ? '' : 'Skip'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <View style={styles.mainContainer}>
      <View style={styles.screen}>
        <WelcomeHeader/>
        <WelcomeBody/>
        <RightButton/>
        <LeftButton/>
      </View>
    </View>
  )
}

const height = DIMENSION.height
const width = DIMENSION.width

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  screen: {
    paddingVertical: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  containerSignInHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSignInBody: {
    marginBottom: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topNavigationRight: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: height * 0.05,
    right: width * 0.05,
  },
  topNavigationLeft: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: height * 0.05,
    left: width * 0.05,
  },
  text: {
    color: '#244495',
    fontFamily: ROBOTO_FONT.bold,
  },
});