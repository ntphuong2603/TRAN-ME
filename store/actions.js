import { DASHBOARD, SETTINGS } from "../utils/constant";

export const APP_NAVIGATOR = {
  // home: DASHBOARD.home,
  // events: DASHBOARD.events,
  // race: DASHBOARD.race,
  // news: DASHBOARD.news,
  ...DASHBOARD,
  setting: {
    home: null,
    ...SETTINGS
  }
}

export const USER_ACTIONS = {
  sign_up = 'sign up',
  login = 'log in',
  logout = 'log out',
  edit_profile = 'edit profile',
  get_profile = 'get profile',
  change_pass = 'change pass',
  update_profile = 'update profile',
  forgot_pass = 'forgot pass',
  change_avatar = 'change avatar',
}