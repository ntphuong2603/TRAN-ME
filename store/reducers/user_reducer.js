import { USER_ACTIONS } from "../actions";

export default function userReducer(state=[], action) {
  switch (action.type){
    case USER_ACTIONS.sign_up:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.login:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.logout:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.get_profile:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.update_profile:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.edit_profile:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.forgot_pass:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.change_pass:
      return [ ...state, ...action.payload ]
    case USER_ACTIONS.change_avatar:
      return [ ...state, ...action.payload ]
    default:
      return [ ...state]
  }
}