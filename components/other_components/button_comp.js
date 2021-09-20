import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant';

export default function ButtonComp({ title, onPress, style, btnStyle, disabled }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        onPress={onPress}
        style={[styles.button, btnStyle, disabled === true ? styles.passiveColor : styles.activeColor]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
     </View>
  )
}

const styles = StyleSheet.create({
  activeColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  passiveColor: {
    backgroundColor: COLORS.SECONDARY,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // borderColor: 'green',
    // borderWidth: 1.5,
  },
  button: {
    // flexGrow: 1,
    width: '100%',
    borderRadius: 12,
    padding: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.headLine_2,
    fontFamily: ROBOTO_FONT.bold,
  },
});
