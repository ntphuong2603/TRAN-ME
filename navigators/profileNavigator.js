import React from 'react'
import EditProfile from '../components/profile_components/edit_profile'
import Profile_scr from '../screens/profile_scr'
import QRCodeScan from '../components/profile_components/qrCode'
import { PROFILE_NAVIGATOR } from '../utils/constant'
import NavigatorTemplate from '../templates/navigator_template'

export default function ProfileNavigator(props) {
  
  const navigatorList = [
    {
      name: PROFILE_NAVIGATOR.homeAccount,
      comp: Profile_scr,
    },{
      name: PROFILE_NAVIGATOR.qrCodeScan,
      comp: QRCodeScan,
    },{
      name: PROFILE_NAVIGATOR.editProfile,
      comp: EditProfile,
    }
  ]

  return(
    <NavigatorTemplate navigatorList={navigatorList}/>
  )
}