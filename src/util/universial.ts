import {Dimensions, ViewStyle} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

export const PLATFORM = Platform.OS;

export const cWidth = Dimensions.get('screen').width;
export const isWide = !(cWidth < 650);
export const statusBarHeight = getStatusBarHeight(true); // skipAndroid
export const bottomSpace = getBottomSpace(); // skipAndroid
export const isAndroid = PLATFORM === 'android';
export const isIOS = PLATFORM === 'ios';

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
  blue: '#00BAFF',
  green: '#80D237',
  white: {
    f: '#ffffff',
    l: '#F0F0F0',
    m: '#A6A6A6',
    d: '#9D9D9D',
  },
  black: {
    d: '#000000',
    m: '#7F7F7F',
    l: '#9B9B9B',
  },
};

export const getShadow = ({
  width,
  height,
  color,
  opacity,
  elevation,
}: {
  // iOS
  width?: number;
  height?: number;
  opacity?: number;
  color?: string;
  // Android
  elevation: number;
}): Partial<ViewStyle> => ({
  shadowOffset: {width: width || 0, height: height || 0},
  shadowColor: color,
  shadowOpacity: opacity || 0.2,
  elevation: elevation === 0 ? 0 : elevation || 10,
});
