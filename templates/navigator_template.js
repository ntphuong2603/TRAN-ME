import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export default function NavigatorTemplate(props) {

  const { navigatorList } = props

  const initRouteName = navigatorList[0].name

  const { isGestureEnabled = false } = props

  const StackNavigator = createStackNavigator()

  return (
    <StackNavigator.Navigator
      initialRouteName={initRouteName}
      screenOptions={{ headerShown: false, gestureEnabled: isGestureEnabled }}
    >
      {navigatorList.map((item, index) => (
        <StackNavigator.Screen key={index}
          name={item.name} component={item.comp}
        />
      ))}
    </StackNavigator.Navigator>
  )
}