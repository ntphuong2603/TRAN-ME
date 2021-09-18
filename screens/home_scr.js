import React from 'react'
import { ScrollView } from 'react-native'
import ActivityTracking from '../components/home_components/activity_tracking'
import DailyChallenge from '../components/home_components/daily_challenge'
import MonthlyOverview from '../components/home_components/monthly_overview'
import OveralActivity from '../components/home_components/overal_activity'
import SessionActivity from '../components/home_components/session_activity'
import WeeklyActivity from '../components/home_components/weekly_activity'
import DashboardTemplate from '../templates/dashboard_templates'

export default function Home_scr(props) {

    return (
        <DashboardTemplate {...props}>
            <ScrollView
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
            >
                <SessionActivity />
                <ActivityTracking />
                <DailyChallenge />
                <WeeklyActivity />
                <OveralActivity />
                <MonthlyOverview />
            </ScrollView>
        </DashboardTemplate>
    )
}