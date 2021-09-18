import React from 'react'
import CreateWallet_scr from '../screens/createWallet_scr'
import SeedCompleted from '../components/createWallet_components/seedCompleted'
import VerifySeed from '../components/createWallet_components/verifySeed'
import { CREATWALLET_NAVIGATOR } from '../utils/constant'
import NavigatorTemplate from '../templates/navigator_template'

export default function CreateWalletNavigator(props) {

  const navigatorList =[
    {
      name: CREATWALLET_NAVIGATOR.createWalletScreen,
      comp: CreateWallet_scr
    },{
      name: CREATWALLET_NAVIGATOR.verifySeed,
      comp: VerifySeed
    },{
      name: CREATWALLET_NAVIGATOR.seedCompleted,
      comp: SeedCompleted,
    }
  ]
  
  return(
    <NavigatorTemplate navigatorList={navigatorList} />
  )
}