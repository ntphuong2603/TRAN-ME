import { APP_NAVIGATOR } from "../actions";


export const home = () => {
  return async(dispatch, getState) => {
    try {
      dispatch({
        type: APP_NAVIGATOR.home,
        payload: APP_NAVIGATOR.home,
      })
    } catch (error){
      console.log('Error: ', error);
    }
  }
}