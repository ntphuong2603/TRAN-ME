import { combineReducers } from "redux"
import userReducer from "./user_reducer";

const appReducers = combineReducers({
  userReducer,
})

export default appReducers;