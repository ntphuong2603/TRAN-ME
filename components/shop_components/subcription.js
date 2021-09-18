import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SettingTemplate from '../../templates/settings_template'
import { COLORS, FONT_SIZE, ROBOTO_FONT, SHOP_NAVIGATOR } from '../../utils/constant'
import { TRAN_ME } from '../other_components/constant_comp'
import TwoColsComp from '../other_components/twoCols_comp'

export default function Subcription(props) {

  const { navigation } = props

  const addCard = () => (
    <TouchableOpacity style={styles.addCardContainer} onPress={()=>navigation.navigate(SHOP_NAVIGATOR.addCard)}>
      <TwoColsComp
        style={{margin: 15,}}
        leftComp={<Image resizeMode='contain' style={styles.addCardImg} source={require('../../assets/icons/add-icon.png')}/>}
        leftStyle={{alignItems: 'center'}}
        rightComp={<Text style={styles.addCardText}> Add Card </Text>}
        rightStyle={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}
      />
    </TouchableOpacity>  
  )

  const paypal = () => {
    const paypalInfo = () => (
      <TwoColsComp
        leftComp={
          <View>
            <Text style={{color: COLORS.DARK_GRAY, fontSize: FONT_SIZE.body_3}}> Paypal balance</Text>
            <Text> $124 </Text>
          </View>
        }
        rightComp={<Text style={{color: COLORS.GREEN}}>Available</Text>}
        rightStyle={{justifyContent: 'center'}}
      />
    )

    return (
    <View>
      <Text style={styles.cardTitle}> Paypal </Text>
      <View style={styles.addCardContainer}>
        <TwoColsComp
          style={{margin: 15}}
          leftComp={<Image resizeMode='contain' style={styles.addCardImg} source={require('../../assets/icons/paypal-icon.png')}/>}
          leftStyle={{alignItems: 'center', justifyContent: 'center'}}
          rightComp={paypalInfo()}
          rightStyle={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}
        />
      </View>  
    </View>
  )}
  
  const visa = () => {
    const visaInfo = () => (
      <TwoColsComp
        leftComp={
          <View>
            <Text style={{color:COLORS.DARK_GRAY, fontSize: FONT_SIZE.body_3}}> Credit/Dedit </Text>
            <Text> xxx xxx xxx 2444 </Text>
            <Text style={{color:COLORS.DARK_GRAY, fontSize: FONT_SIZE.body_3}}> Expiry: 09/21 </Text>
          </View>
        }
        leftStyle={{flex: 4}}
        rightComp={<Text style={{color: COLORS.PRIMARY}}>Edit</Text>}
        rightStyle={{justifyContent: 'center'}}
      />
    )

    return (
    <View>
      <Text style={styles.cardTitle}> Credit card </Text>
      <View style={styles.addCardContainer}>
        <TwoColsComp
          style={{margin: 15,}}
          leftComp={<Image resizeMode='contain' style={styles.addCardImg} source={require('../../assets/icons/visa-icon.png')}/>}
          leftStyle={{alignItems: 'center', justifyContent: 'center'}}
          rightComp={visaInfo()}
          rightStyle={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}
        />
      </View>  
    </View>
  )}

  const subscriptionFee = () => (
    <View style={styles.subscriptionFeeContainer}>
      <Text style={styles.payText}> Pay subscription fee - {TRAN_ME(COLORS.ORANGE)} </Text>
      <View style={styles.subscriptionFeeBox}>
        <Text style={styles.subscriptionFeeText}> $10 </Text>
      </View>
    </View>
  )

  const button = {
    title: 'Proceed',
    onPress: () => navigation.navigate(SHOP_NAVIGATOR.myOrder)
  }
  
  return (
    <SettingTemplate navigation={navigation} title={'Subscription'} isShowRectangle={false} isShowButton={true} button={button}>
      {subscriptionFee()}
      {paypal()}
      {visa()}
      {addCard()}
    </SettingTemplate>
  )
}

const styles = StyleSheet.create({
  subscriptionFeeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  subscriptionFeeBox:{
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: COLORS.DARK_GRAY,
    borderBottomWidth: 0.5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionFeeText:{
    fontSize: FONT_SIZE.title_1,
  },
  payText:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.body_2,
  },
  addCardContainer:{
    borderRadius: 15,
    backgroundColor: COLORS.BACKGROUND,
    marginTop: 20,
  },
  addCardImg:{
    width: 35,
    height: 35,
  },
  addCardText:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.headLine_2,
    color: COLORS.PRIMARY
  },
  cardTitle:{
    fontFamily: ROBOTO_FONT.medium,
    fontSize: FONT_SIZE.headLine_2,
    marginTop: 30,
  },
})