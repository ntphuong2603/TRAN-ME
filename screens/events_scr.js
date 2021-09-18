import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../utils/constant'
import DashboardTemplate from '../templates/dashboard_templates'

export default function HomeGreeting(props) {
    
    const [ selected, setSelected ] = useState('Standing')

    const twoSelection = () => (
        <View style={styles.selectionStyle}>
            {['Standing','Information'].map(selection=>(
            <View style={[styles.selection, selection === selected ? styles.bottomLine : {}]}>
                <TouchableOpacity  onPress={()=>setSelected(selection)}>
                <Text style={[styles.selectionText, {color: selection === selected ? COLORS.BLACK : COLORS.GRAY}]}>{selection}</Text>
                </TouchableOpacity>
            </View>
            ))}
        </View>
    )
    
    const eventList = [
        {
            firstName: 'Madam',
            lastName: 'Luu',
            city: 'Hawaii',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-7.png')
        },{
            firstName: 'Jacob',
            lastName: 'Jones',
            city: 'New Jersey',
            country: 'US',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-1.png')
        },{
            firstName: 'Cody',
            lastName: 'Fisher',
            city: 'Thuong Hai',
            country: 'China',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-2.png')
        },{
            firstName: 'Theresa',
            lastName: 'Webb',
            city: 'Hawaii',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-3.png')
        },{
            firstName: 'Esther',
            lastName: 'Howard',
            city: 'Maine',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-4.png')
        },{
            firstName: 'Alex',
            lastName: 'Nguyen',
            city: 'Ha Noi',
            country: 'Vietnam',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-5.png')
        },{
            firstName: 'Devon',
            lastName: 'Lane',
            city: 'Washington',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-6.png')
        },{
            firstName: 'Madam',
            lastName: 'Luu',
            city: 'Hawaii',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-7.png')
        },{
            firstName: 'Jacob',
            lastName: 'Jones',
            city: 'New Jersey',
            country: 'US',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-1.png')
        },{
            firstName: 'Cody',
            lastName: 'Fisher',
            city: 'Thuong Hai',
            country: 'China',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-2.png')
        },{
            firstName: 'Theresa',
            lastName: 'Webb',
            city: 'Hawaii',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-3.png')
        },{
            firstName: 'Esther',
            lastName: 'Howard',
            city: 'Maine',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-4.png')
        },{
            firstName: 'Alex',
            lastName: 'Nguyen',
            city: 'Ha Noi',
            country: 'Vietnam',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-5.png')
        },{
            firstName: 'Devon',
            lastName: 'Lane',
            city: 'Washington',
            country: 'California',
            value: [
                { name: 'D', value: 21.23},
                { name: 'C', value: 111.86},
                { name: 'T', value: 21.23}
            ],
            avatar: require('../assets/avatars/event-6.png')
        }
    ]

    const eventItem = (event, index) => (
        <View style={styles.eventContainer} key={index + Math.random()}>
            <Text style={styles.noText}>{index < 9 ? `0${index+1}`: index+1}</Text>
            <Image resizeMode='contain' style={styles.imgAvatar} source={event.avatar}/>
            <View style={styles.paddingText}>
                <Text style={styles.fullNameText}>{event.firstName} {event.lastName}</Text>
                <Text style={styles.countryText}>{event.city}, {event.country}</Text>
            </View>
            {event.value.map(value=>(
                <Text style={styles.valueText}>{value.value}</Text>
            ))}
        </View>
    )
    
    const emptyInfo = () => (
        <View style={{flexDirection:'row', borderBottomWidth: 0.5, minHeight: 35,
        alignItems: 'center',
        borderBottomColor: COLORS.GRAY,}}>
            <View style={{flex: 1}}/>
                {eventList[0].value.map(value=>(
                    <Text style={styles.valueName}>{value.name}</Text>
                ))}
        </View>
    )

    return (
        <DashboardTemplate {...props}>
            {twoSelection()}
            {emptyInfo()}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                {eventList.map((event, index)=>eventItem(event, index))}
            </ScrollView>
        </DashboardTemplate>
    )
}

const styles = StyleSheet.create({
    selectionStyle:{
        minHeight: 40,
        borderBottomWidth: 1,
        borderColor: COLORS.GRAY,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    selection:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomLine:{
        flex: 1,
        borderBottomWidth: 3,
        borderColor: COLORS.PRIMARY,
    },
    selectionText:{
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.headLine_1
    },
    comp: {
        width: '100%',
        minHeight: 40,
        justifyContent: 'center',
        borderWidth:1,
        borderColor: 'red',
        alignItems: 'center'
    },
    eventContainer:{
        flexGrow: 1,
        minHeight: 70,
        flexDirection: 'row',
        alignItems: 'center',
        // borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        // borderTopColor: COLORS.GRAY,
        borderBottomColor: COLORS.GRAY,
    },
    imgAvatar:{
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    noText:{
        fontFamily: ROBOTO_FONT.condense.bold,
        fontSize: FONT_SIZE.body_3,
        color: COLORS.PRIMARY,
        padding: 5,
    },
    fullNameText:{
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.body_2-1,
        color: COLORS.PRIMARY,
    },
    countryText:{
        fontFamily: ROBOTO_FONT.condense.light,
        fontSize: FONT_SIZE.body_3-1,
        color: COLORS.DARK_GRAY,
    },
    valueText:{
        fontFamily: ROBOTO_FONT.condense.regular,
        fontSize: FONT_SIZE.body_3,
        paddingLeft: 5,
        // borderWidth: 1,
        // borderColor: 'red',
        width: 50,
    },
    paddingText:{
        padding: 10,
        // borderWidth: 1,
        // borderColor: 'red',
        width: 150,
    },
    valueName:{
        // flex: 1,
        width: 45,
        // alignContent: 'center',
        // justifyContent: 'center',
        textAlign: 'center',
        color: COLORS.PRIMARY,
        fontWeight: 'bold',
        // borderWidth: 1,
        // borderColor: 'red',
    }
})