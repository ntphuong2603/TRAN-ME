import React from 'react'
import { View } from 'react-native'
import { COLORS, DASHBOARD_NAVIGATOR, SETTINGS_NAVIGATOR } from '../utils/constant'
import Home_scr from '../screens/home_scr'
import Events_scr from '../screens/events_scr'
import Race_scr from '../screens/race_scr'
import News_scr from '../screens/news_scr'
import Notification_scr from '../screens/notification_scr'
import SettingsNavigator from './settingsNavigator'
import NotificationComp from '../components/other_components/notification_comp'
import NavigatorTemplate from '../templates/navigator_template'
import { getCurrentBottomNavigation } from '../utils/getNavigationName'
import BottomNavigation from './bottomNavigation'

export default function DashboardNavigator(props) {

    const showNotificationList = [
        DASHBOARD_NAVIGATOR.home, 
        DASHBOARD_NAVIGATOR.events, 
        DASHBOARD_NAVIGATOR.race, 
        DASHBOARD_NAVIGATOR.news,
    ]

    const navigatorList = [
        {
            name: DASHBOARD_NAVIGATOR.home,
            comp: Home_scr
        }, {
            name: DASHBOARD_NAVIGATOR.events,
            comp: Events_scr
        }, {
            name: DASHBOARD_NAVIGATOR.race,
            comp: Race_scr
        }, {
            name: DASHBOARD_NAVIGATOR.news,
            comp: News_scr
        }, {
            name: DASHBOARD_NAVIGATOR.settingNavigator,
            comp: SettingsNavigator,
        }, {
            name: DASHBOARD_NAVIGATOR.notification,
            comp: Notification_scr,
        }
    ]

    const showNotificationBar = (props) => {
        const { currentNavigationName, nextNavigation } = getCurrentBottomNavigation(props)
        // console.log('Current navigation:', currentNavigationName, nextNavigation);
        if (showNotificationList.indexOf(currentNavigationName) > -1 || nextNavigation === SETTINGS_NAVIGATOR.settingsScreen){
            return <NotificationComp {...props} />
        }
        return null
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
            {showNotificationBar(props)}
            <NavigatorTemplate navigatorList={navigatorList} />
            <BottomNavigation {...props} />
        </View>
    )
}