import { APP_NAVIGATOR } from "../actions"

export default function appNavigator(state={},actions) {
  switch (actions.type){
    case APP_NAVIGATOR.home:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.events:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.race:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.news:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.home:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.profile:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.createWallet:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.tokenTransfer:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.transferHistory:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.shop:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.sendGift:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.changePass:
      return {...state, navigate: actions.payload}
    case APP_NAVIGATOR.setting.addFriend:
      return {...state, navigate: actions.payload}
    default: 
      return state
  }
}