import {Colors} from '../styles';

export interface Theme {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  text: string;
  logoSrc: string;
  // Add font name
  // Update the risus logo and add to open menu
}

export interface Themes {
  [key: string]: Theme;
}

export const THEME_ORIGINAL = 'THEME_ORIGINAL';
export const THEME_WINTER = 'THEME_WINTER';
export const THEME_SPRING = 'THEME_SPRING';
export const THEME_SUMMER = 'THEME_SUMMER';
export const THEME_FALL = 'THEME_FALL';

export const themes: Themes = {
  THEME_ORIGINAL: {
    color1: Colors.BLACK,
    color2: Colors.GREEN,
    color3: Colors.LIGHT_GREEN,
    color4: Colors.DARK_ORANGE,
    color5: Colors.ORANGE,
    text: '#ffffff',
    logoSrc: require('../assets/images/logo-small.png'),
  },
  THEME_WINTER: {
    color1: '#010a13',
    color2: '#031730',
    color3: '#979ca2',
    color4: '#1126a5',
    color5: '#2f77c3',
    text: '#ffffff',
    logoSrc: require('../assets/images/logo-small.png'),
  },
  THEME_SPRING: {
    color1: '#479003',
    color2: '#98c7f1',
    color3: '#f8b3ec',
    color4: '#a4d13a',
    color5: '#f94994',
    text: '#ffffff',
    logoSrc: require('../assets/images/logo-small.png'),
  },
  THEME_SUMMER: {
    color1: '#053f43',
    color2: '#006a5c',
    color3: '#02ab82',
    color4: '#61bf9a',
    color5: '#eee296',
    text: '#ffffff',
    logoSrc: require('../assets/images/logo-small.png'),
  },
  THEME_FALL: {
    color1: '#680e03',
    color2: '#b11509',
    color3: '#fc5e1d',
    color4: '#fe8b4c',
    color5: '#eb9911',
    text: '#ffffff',
    logoSrc: require('../assets/images/logo-small.png'),
  },
};
