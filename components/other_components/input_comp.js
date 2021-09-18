import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, DIMENSION, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InputComp({
  placeholder,
  isSecure,
  label,
  value,
  onChange,
  isError,
  errorText,
  ftIcon,
  ftIconPress,
  bkIcon,
  bkIconPress,
  bkIconAfter,
  disabled,
  max,
  keyboard,
}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {ftIcon && 
          <TouchableOpacity onPress={ftIconPress}>
            <Icon name={ftIcon} size={24} color={COLORS.DARK_GRAY}/>
          </TouchableOpacity>
        }
          <TextInput
            value={value}
            onChangeText={text => onChange(text)}
            style={styles.textInput}
            placeholder={placeholder}
            secureTextEntry={isSecure}
            editable={!disabled}
            maxLength={max}
            keyboardType={keyboard}
          />
        {bkIcon && 
          <TouchableOpacity onPress={bkIconPress}>
            <Icon name={isSecure ? bkIcon : bkIconAfter} size={24} color={COLORS.DARK_GRAY}/>
          </TouchableOpacity>
        }
      </View>
      {isError && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    // flexGrow: 1,
    // borderWidth: 2,
    // borderColor: 'red',
    marginBottom: 20,
  },
  inputContainer:{
    // flex: 1,
    flexDirection: 'row',
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1.2,
    borderColor: COLORS.GRAY,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex:1,
    paddingLeft: 5,
    height: DIMENSION.width * 0.12,
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_2,
  },
  label: {
    fontSize: FONT_SIZE.body_1,
    color: '#0B2E40',
    fontFamily: ROBOTO_FONT.medium,
  },
  errorText: {
    color: 'red',
    fontFamily: ROBOTO_FONT.regular,
    margin: 5,
  },
  icon: {
    fontSize: FONT_SIZE.title_1 + 5,
    position: 'absolute',
    right: 10,
    top: 50,
    color: '#757679'
  }
});
