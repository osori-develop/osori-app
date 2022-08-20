// Fast Image
import React, {memo} from 'react';
import {FlexAlignType} from 'react-native';
import FastImage, {
  OnLoadEvent,
  Source,
  ImageStyle,
} from 'react-native-fast-image';

interface Props {
  source: Source | number;
  width?: number | string;
  height?: number | string;
  alignSelf?: 'auto' | FlexAlignType;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  marginLeft?: number;
  marginRight?: number;
  bg?: string;
  zIndex?: number;
  style?: ImageStyle;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  aspectRatio?: number;
  color?: string;
  onLoad?: (event: OnLoadEvent) => void;
  children?: JSX.Element;
}

// resizeMode = 'contain'이 default
export default memo(
  ({
    source,
    width,
    height,
    alignSelf = 'auto',
    resizeMode,
    marginLeft = 0,
    marginRight = 0,
    bg = 'transparent',
    zIndex = 0,
    style = {},
    onLoadStart,
    onLoadEnd,
    aspectRatio,
    color,
    onLoad,
    children,
  }: Props) => {
    return (
      <FastImage
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onLoad={onLoad}
        style={[
          {
            width,
            height,
            alignSelf,
            marginLeft,
            marginRight,
            backgroundColor: bg,
            zIndex,
            aspectRatio,
          },
          style,
        ]}
        source={source}
        resizeMode={resizeMode}
        tintColor={color}>
        {children}
      </FastImage>
    );
  },
);
