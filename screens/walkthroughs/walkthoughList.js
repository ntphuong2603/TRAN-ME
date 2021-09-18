import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { COLORS, DIMENSION, FONT_SIZE, ROBOTO_FONT } from '../../utils/constant';
import walkthoughContentList from './walkthoughContentList';

export default function WalkthroughList() {

  return (
    walkthoughContentList.map(walkthough => (
      <View style={[styles.container, styles.imagePadding]} key={walkthough => (`walkthough-${walkthoughList.indexOf(walkthough)}`)}>
        <Image
          style={{ resizeMode: 'contain', ...styles.imgStyle }}
          source={walkthough.img}
        />
        <Text style={styles.headerText}>{walkthough.headerText}</Text>
        <Text style={styles.bodyText}>
          {walkthough.bodyText}
          {walkthough.boldText ? <Text style={styles.boldText}>{` ${walkthough.boldText} `}</Text> : null}
          {walkthough.theRest ? walkthough.theRest : null}
        </Text>
      </View>
    ))
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 140,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    margin: 10,
    color: '#244495',
    fontWeight: 'bold',
    fontFamily: ROBOTO_FONT.condense.bold,
    fontSize: FONT_SIZE.title_2,
  },
  bodyText: {
    textAlign: 'center',
    margin: 10,
    color: '#3B3D41',
    fontWeight: 'normal',
    fontFamily: ROBOTO_FONT.regular,
    fontSize: FONT_SIZE.body_2,
    lineHeight: 20,
  },
  boldText: {
    color: COLORS.PRIMARY,
    fontFamily: ROBOTO_FONT.bold,
  },
  imgStyle: {
    height: DIMENSION.height * 0.37,
    width: DIMENSION.width - 40
  },
  imagePadding: {
    paddingTop: DIMENSION.height * 0.1,
  }
})