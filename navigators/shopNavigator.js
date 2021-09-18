import React from 'react'
import Shop_scr from '../screens/shop_scr'
import AddCard from '../components/shop_components/add_card'
import MyOrder from '../components/shop_components/myOrder'
import ShowCamera from '../components/shop_components/showCamera'
import Subcription from '../components/shop_components/subcription'
import { SHOP_NAVIGATOR } from '../utils/constant'
import NavigatorTemplate from '../templates/navigator_template'

export default function ShopNavigator(props) {

  const navigatorList = [
    {
      name: SHOP_NAVIGATOR.shopScreen,
      comp: Shop_scr,
    },{
      name: SHOP_NAVIGATOR.subcription,
      comp: Subcription
    },{
      name: SHOP_NAVIGATOR.addCard,
      comp: AddCard,
    },{
      name: SHOP_NAVIGATOR.showCamera,
      comp: ShowCamera,
    },{
      name: SHOP_NAVIGATOR.myOrder,
      comp: MyOrder,
    }
  ]
  return(
    <NavigatorTemplate navigatorList={navigatorList}/>
  )
}