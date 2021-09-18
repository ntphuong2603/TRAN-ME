import React from 'react'
import SendGift_scr from '../screens/sendGift_scr'
import ShowCamera from '../components/sendGift_components/showCamera'
import { SENDGIFT_NAVIGATOR } from '../utils/constant'
import NavigatorTemplate from '../templates/navigator_template'

export default function SendGiftNavigator(props) {

  const navigatorList = [
    {
      name: SENDGIFT_NAVIGATOR.sendGiftScreen,
      comp: SendGift_scr
    },{
      name: SENDGIFT_NAVIGATOR.showCamera,
      comp: ShowCamera
    }
  ]

  return(
    <NavigatorTemplate navigatorList={navigatorList}/>
  )
}