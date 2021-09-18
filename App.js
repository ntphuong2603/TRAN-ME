import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts  } from 'expo-font';
import { COLORS, MULISH_FONT, ROBOTO_FONT } from './utils/constant';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigators/appNavigator';

const roboto_font_list = {
  [ROBOTO_FONT.black]:require('./assets/fonts/Roboto/Roboto-Black.ttf'),
  [ROBOTO_FONT.bold]:require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  [ROBOTO_FONT.medium]:require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  [ROBOTO_FONT.light]:require('./assets/fonts/Roboto/Roboto-Light.ttf'),
  [ROBOTO_FONT.regular]:require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  [ROBOTO_FONT.condense.regular]:require('./assets/fonts/Roboto/RobotoCondensed-Regular.ttf'),
  [ROBOTO_FONT.condense.bold]:require('./assets/fonts/Roboto/RobotoCondensed-Bold.ttf'),
  [ROBOTO_FONT.condense.light]:require('./assets/fonts/Roboto/RobotoCondensed-Light.ttf'),
}

const mulish_font_list = {
  [MULISH_FONT.black]:require('./assets/fonts/Mulish/Mulish-Black.ttf'),
  [MULISH_FONT.medium]:require('./assets/fonts/Mulish/Mulish-Medium.ttf'),
  [MULISH_FONT.regular]:require('./assets/fonts/Mulish/Mulish-Regular.ttf'),
  [MULISH_FONT.bold]:require('./assets/fonts/Mulish/Mulish-Bold.ttf'),
  [MULISH_FONT.light]:require('./assets/fonts/Mulish/Mulish-Light.ttf'),
  [MULISH_FONT.semiBold]:require('./assets/fonts/Mulish/Mulish-SemiBold.ttf'),
}

export default App = () => {

  const [loaded] = useFonts(roboto_font_list)

  const AppTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: COLORS.WHITE,
    }
  }

  if (!loaded){
    return <AppLoading/>
  } 

  return(
    <Provider store={appStore()}>
      <NavigationContainer theme={AppTheme}>
      <StatusBar hidden={true} backgroundColor="#C5A0F4" barStyle="light-content"/>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
    
  )
}