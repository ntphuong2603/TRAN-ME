import { DASHBOARD_NAVIGATOR, SETTINGS_NAVIGATOR } from "./constant";

export function getCurrentBottomNavigation({navigation}) {

  const { routes } = navigation.getState()

  const currentNavigationName = getNavigationName({ routes: routes, homeRoute: DASHBOARD_NAVIGATOR.home })

  if (currentNavigationName===DASHBOARD_NAVIGATOR.settingNavigator){
    const nextNavigation = getNavigationName({routes : routes[0].state.routes.slice(-1), homeRoute: SETTINGS_NAVIGATOR.settingsScreen})
    return { currentNavigationName, nextNavigation }
  } else {
    return { currentNavigationName }
  }

}

export function getNavigationName({routes, homeRoute}) {

  const currentNavigationName = routes[0].state ? routes[0].state.routes.slice(-1)[0].name : homeRoute

  return currentNavigationName

}