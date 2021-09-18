import { Dimensions } from 'react-native';

export const COLORS = {
  PRIMARY: '#244495',
  SECONDARY: '#5270BD',
  BLACK: '#191B20',
  WHITE: '#ffffff',
  GRAY: '#D9D9D9',
  DARK_GRAY: '#757679',
  BACKGROUND: '#FAFAFA',
  BLACK_PURE: '#000000',
  ORANGE: '#F66268',
  GREEN: '#27AE60',
  WARNING: '#ED1C24',
};

export const DIMENSION = {
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};

export const SIZE = {
  small: 12,
  medium: 16,
  large: 18,
  xlarge: 20,
};

export const MULISH_FONT = {
  black: 'Mulish-Black',
  bold: 'Mulish-Bold',
  light: 'Mulish-Light',
  medium: 'Mulish-Medium',
  regular: 'Mulish-Regular',
  semiBold: 'Mulish-SemiBold',
}

export const ROBOTO_FONT = {
  black:'Roboto-Black',
  regular: 'Roboto-Regular',
  light: 'Roboto-Light',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  condense: {
    regular:'RobotoCondensed-Regular',
    bold:'RobotoCondensed-Bold',
    light: 'RobotoCondensed-Light'
  }
};

export const FONT_SIZE = {
  title_1: 28,
  title_2: 22,
  headLine_1: 18,
  headLine_2: 16,
  headLine_3: 14,
  body_1: 16,
  body_2: 14,
  body_3: 12,
}

export const STORAGE = {
  isFirstLaunch : 'isFirstLaunch',
  userData : 'userData',
  cameraPermission : 'cameraPermission'
}

export const APP_NAVIGATOR = {
  authNavigator : 'auth navigator',
  dashboardNavigator : 'dashboard navigator'
}

export const AUTH = {
  splash : 'splash',
  welcome: 'welcome',
  signup : 'signup',
  signin : 'signin',
  verify : 'verify',
}

export const AUTH_NAVIGATOR = {
  splash : 'splash',
  welcome: 'welcome',
  signup : 'signup',
  signin : 'signin',
  verify : 'verify',
}

export const DASHBOARD = {
  home:'home',
  events: 'events',
  race: 'race',
  news: 'news',
  setting: 'settings',
}

export const DASHBOARD_NAVIGATOR = {
  notification: 'notification',
  home:'home',
  events: 'events',
  race: 'race',
  news: 'news',
  settingNavigator: 'settings navigator',
}

export const SETTINGS = {
  homeSettings: 'homeSettings',
  createWallet: 'Create wallet',
  tokenTransfer: 'Token tranfer',
  transferHistory: 'Transfer history',
  shop: 'Shop', 
  sendGift: 'Send gift',
  homeProfile:'homeProfile',
  changePass: 'Change password',
  addFriend: 'Add friend',
  language: 'Language'
}

export const SETTINGS_NAVIGATOR = {
  settingsScreen : 'settings screen',
  createWalletNavigator: 'Create wallet',
  tokenTransfer: 'Token tranfer',
  transferHistory: 'Transfer history',
  shopNavigator: 'Shop', 
  sendGiftNavigator: 'Send gift',
  profileNavigator:'Profile',
  changePass: 'Change password',
  addFriend: 'Add friend',
  language: 'Language'
}

export const PROFILE = {
  homeAccount: 'homeAccount',
  editProfile: 'Edit profile',
  qrCodeScan: 'QR code scan',
}

export const PROFILE_NAVIGATOR = {
  homeAccount: 'homeAccount',
  editProfile: 'Edit profile',
  qrCodeScan: 'QR code scan',
}

export const SHOP_NAVIGATOR = {
  shopScreen:'shop screen',
  subcription: 'subcription',
  addCard: 'add card',
  showCamera: 'show camera',
  myOrder: 'my order',
}

export const SENDGIFT_NAVIGATOR = {
  sendGiftScreen : 'send gift screen',
  showCamera: 'show camera'
}

export const CREATWALLET_NAVIGATOR = {
  createWalletScreen : 'create wallet screen',
  verifySeed : 'verify seed',
  seedCompleted: 'seed completed',
}

export const INPUT_FIELDS = {
  email: {
    fieldName: 'email',
    placeholder:'Enter your email address',
    label: 'Email',
    ftIcon: 'account-outline',
  },
  password: {
    fieldName: 'password',
    placeholder:'Enter your password',
    label: 'Password',
    ftIcon: 'lock-outline',
    bkIcon: 'eye-off-outline',
    bkIconAfter: 'eye-outline',
  },
  confirmPassword: {
    fieldName: 'confirmPassword',
    placeholder:'Confirm password',
    label: 'Confirm password',
    ftIcon: 'lock-outline',
    bkIcon: 'eye-off-outline',
    bkIconAfter: 'eye-outline',
  },
  verfiCode: {
    fieldName: 'verifyCode',
    placeholder: 'Enter the verification code',
    label: 'Verifying code',
    ftIcon: 'lock-outline',
    bkIcon: 'eye-off-outline',
    bkIconAfter: 'eye-outline',
  },
  firstName:{
    fieldName: 'firstName',
    placeholder: 'Enter your first name',
    label: 'First name',
  },
  lastName:{
    fieldName: 'lastName',
    placeholder: 'Enter your last name',
    label: 'Last name',
  },
  height:{
    fieldName: 'height',
    placeholder: '182 cm',
    label: 'Height (cm)',
  },
  weight:{
    fieldName: 'weight',
    placeholder: '99 kg',
    label: 'Weight (kg)',
  },
  gender:{
    fieldName: 'gender',
    placeholder: 'Select your gender',
    label: 'Gender',
    bkIcon: 'chevron-down',
    bkIconAfter: 'chevron-down',
  },
  dob:{
    fieldName: 'dob',
    placeholder: 'Select date of birth',
    label: 'Date of birth',
    bkIcon: 'chevron-down',
    bkIconAfter: 'chevron-down',
  },
  city:{
    fieldName: 'city',
    placeholder: 'Select city',
    label: 'City',
    bkIcon: 'chevron-down',
    bkIconAfter: 'chevron-down',
  },
  country:{
    fieldName: 'country',
    placeholder: 'Select country',
    label: 'Country',
    bkIcon: 'chevron-down',
    bkIconAfter: 'chevron-down',
  }
}

export const BOTTOM_NAVIGATION = [ 
  {
    name: DASHBOARD_NAVIGATOR.home,
    activeIcon: require('../assets/icons/home_active.png'),
    passiveIcon: require('../assets/icons/home.png')
  },{
    name: DASHBOARD_NAVIGATOR.events,
    activeIcon: require('../assets/icons/event_active.png'),
    passiveIcon: require('../assets/icons/event.png')
  },{
    name: DASHBOARD_NAVIGATOR.race,
    activeIcon: require('../assets/icons/race_active.png'),
    passiveIcon: require('../assets/icons/race.png')
  },{
    name: DASHBOARD_NAVIGATOR.news,
    activeIcon: require('../assets/icons/news_active.png'),
    passiveIcon: require('../assets/icons/news.png')
  },{
    name: DASHBOARD_NAVIGATOR.settingNavigator,
    activeIcon: require('../assets/icons/setting_active.png'),
    passiveIcon: require('../assets/icons/setting.png')
  }
]

export const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export const DAY = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']