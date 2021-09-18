import React from 'react'
import { SETTINGS_NAVIGATOR } from '../utils/constant'
import AddFriend from '../components/settings_components/add_friend'
import ChangePassword from '../components/settings_components/change_password'
import Language from '../components/settings_components/language'
import TokenTransfer from '../components/settings_components/token_transfer'
import TransferHistory from '../components/settings_components/transfer_history'
import NavigatorTemplate from '../templates/navigator_template'
import Settings_scr from '../screens/settings_scr'
import CreateWalletNavigator from './createWalletNavigator'
import ShopNavigator from './shopNavigator'
import SendGiftNavigator from './sendGiftNavigator'
import ProfileNavigator from './profileNavigator'

export default function SettingsNavigator(props) {

    const navigatorList = [
        {
            name: SETTINGS_NAVIGATOR.settingsScreen,
            comp: Settings_scr,
        }, {
            name: SETTINGS_NAVIGATOR.createWalletNavigator,
            comp: CreateWalletNavigator,
        }, {
            name: SETTINGS_NAVIGATOR.tokenTransfer,
            comp: TokenTransfer,
        }, {
            name: SETTINGS_NAVIGATOR.transferHistory,
            comp: TransferHistory,
        }, {
            name: SETTINGS_NAVIGATOR.shopNavigator,
            comp: ShopNavigator,
        }, {
            name: SETTINGS_NAVIGATOR.sendGiftNavigator,
            comp: SendGiftNavigator,
        }, {
            name: SETTINGS_NAVIGATOR.profileNavigator,
            comp: ProfileNavigator,
        }, {
            name: SETTINGS_NAVIGATOR.changePass,
            comp: ChangePassword,
        }, {
            name: SETTINGS_NAVIGATOR.addFriend,
            comp: AddFriend,
        }, {
            name: SETTINGS_NAVIGATOR.language,
            comp: Language,
        }
    ]

    return (
        <NavigatorTemplate navigatorList={navigatorList} isGestureEnabled={true}/>
    )
}