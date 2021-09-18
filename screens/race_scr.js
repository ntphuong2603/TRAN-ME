import { Formik } from 'formik'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import TwoColsComp from '../components/other_components/twoCols_comp'
import { COLORS, FONT_SIZE, INPUT_FIELDS, ROBOTO_FONT } from '../utils/constant'
import { input } from '../templates/account_template'
import DashboardTemplate from '../templates/dashboard_templates'

export default function Race_scr(props) {

    const friendList = [
        {
            firstName: 'Leslie',
            lastName: 'Alexander',
            city: 'Shanghai',
            country: 'China',
            status: 1,
            avatar: require('../assets/avatars/race-1.png')
        }, {
            firstName: 'Ralph',
            lastName: 'Edwards',
            city: 'New Jersey',
            country: 'US',
            status: 0,
            avatar: require('../assets/avatars/race-2.png')
        }, {
            firstName: 'Annette',
            lastName: 'Black',
            city: 'Maine',
            country: 'California',
            status: 0,
            avatar: require('../assets/avatars/race-3.png')
        }, {
            firstName: 'Arlene',
            lastName: 'McCoy',
            city: 'Shanghai',
            country: 'China',
            status: 1,
            avatar: require('../assets/avatars/race-4.png')
        },
    ]

    const eventItem = (event, index) => (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.imgAvatar} source={event.avatar} />
            <View style={styles.paddingText}>
                <Text style={styles.fullNameText}>{event.firstName} {event.lastName}</Text>
                <Text style={styles.countryText}>{event.city}, {event.country}</Text>
            </View>
            <View style={{ alignItems: "flex-end", paddingRight: 10 }}>
                <Text style={{ color: event.status ? COLORS.GREEN : COLORS.GRAY }}>{event.status ? 'Online' : 'Offline'}</Text>
            </View>

        </View>
    )

    const inputFields = [INPUT_FIELDS.city, INPUT_FIELDS.country]

    const cityCountry = () => (
        <Formik
            initialValues={{city : '' , country: ''}}
            onSubmit={values=>handleSubmit(values)}
        >
            {({handleChange, handleSubmit, values, errors, touched})=>(
                <TwoColsComp
                    leftComp={input({field: inputFields[0], index: 0, handleChange, values, errors, touched})}
                    leftStyle={{ alignItems: null, paddingRight: 5 }}
                    rightComp={input({field: inputFields[1], index: 1, handleChange, values, errors, touched})}
                    rightStyle={{ alignItems: null, paddingLeft: 5 }}
                />
            )}
        </Formik>
    )

    return (
        <DashboardTemplate {...props}>
            {cityCountry()}
            <Text style={styles.textTitle}> Friend list </Text>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                {friendList.map((friend, index) => (
                    eventItem(friend, index)
                ))}
            </ScrollView>
        </DashboardTemplate>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.body_1,
    },
    container: {
        flexGrow: 1,
        minHeight: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgAvatar: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    fullNameText: {
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.body_2,
        color: COLORS.PRIMARY,
    },
    countryText: {
        fontFamily: ROBOTO_FONT.regular,
        fontSize: FONT_SIZE.body_3,
        color: COLORS.DARK_GRAY,
    },
    paddingText: {
        flex: 1,
        padding: 10,
        width: 150,
    },
})