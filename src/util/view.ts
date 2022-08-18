import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const cWidth = Dimensions.get('screen').width;
export const isWide = !(cWidth < 650);
export const statusBarHeight = getStatusBarHeight(true); // skipAndroid
export const bottomSpace = getBottomSpace(); // skipAndroid

const defaultFigmaWidth = 375;
export const pixel = (size: number) => {
  if (cWidth < 650) {
    // 일반 기종
    return (size * cWidth) / defaultFigmaWidth;
  } else {
    return (size * cWidth) / 750;
  }
};

export const colors = {
  blue: '#308FFF',
  white: {
    l: '#C3C3C3',
    m: '#A6A6A6',
    d: '#9D9D9D',
  },
};
