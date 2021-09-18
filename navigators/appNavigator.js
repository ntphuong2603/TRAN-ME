import React from 'react'
import NavigatorTemplate from '../templates/navigator_template'
import DashboardNavigator from './dashboardNavigator'
import AuthNavigator from './authNavigator'
import { APP_NAVIGATOR } from '../utils/constant'


export default function AppNavigator(props) {

  const navigatorList = [
    {
      name: APP_NAVIGATOR.authNavigator,
      comp: AuthNavigator
    },{
      name: APP_NAVIGATOR.dashboardNavigator,
      comp: DashboardNavigator
    },
  ]

  return(
    <NavigatorTemplate navigatorList={navigatorList}/>
  )
}