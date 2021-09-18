import { API_STRING } from "../../utils/apiConstant";
import { request_url } from '../../utils/urlConstant'


export const sign_up = ({email, password}) => {
  return async (dispatch, getState) => {
    try {
      const userInfo = { email, password }

      const result = await fetch(request_url(API_STRING.signup_user), userInfo)
      console.log('Sign up result: ', result);
      // if (result.status === 200){

      // }
    } catch (error){
      console.log('Error: ', error);
    }
  }
}