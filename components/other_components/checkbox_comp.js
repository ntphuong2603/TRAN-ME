import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../utils/constant'

export default function CheckboxComp({isCheck, onPress, style, text, textStyle, iconSize = 22}) {
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.checkBox, style]}>
                <Icon name={isCheck ? 'checkbox-marked-outline':'checkbox-blank-outline'} size={iconSize} color={COLORS.PRIMARY}/>
                <Text style={[styles.textStyle, textStyle]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBox:{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'flex-start'
    },
    textStyle:{
        paddingLeft: 5,
    }
})