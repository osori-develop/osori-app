import React from 'react';
import {Text, TextStyle} from 'react-native';
import {isAndroid} from '~/util/universial';

const defaultLineHeightMultipleValue = 1.4;

export type PTextFontWeight = 'B' | 'M' | 'R' | 'L' | 'SB'; // SB: Semi Bold (for Jost)

interface NotoSansTextProps {
  text: string;
  color: string;
  weight: PTextFontWeight;
  fontSize: number;
  style?: TextStyle;
  lineHeightMultipleValue?: number;
  numberOfLines?: number;
}

export const OText = ({
  style,
  text,
  color,
  weight,
  fontSize,
  lineHeightMultipleValue = defaultLineHeightMultipleValue,
  numberOfLines,
}: NotoSansTextProps) => {
  switch (weight) {
    case 'B':
      return (
        <Text
          style={{
            lineHeight: lineHeightMultipleValue * fontSize,
            color,
            fontSize,
            // fontFamily: 'NotoSansKR-Bold',
            fontWeight: isAndroid ? undefined : '700',
            ...style,
          }}
          numberOfLines={numberOfLines}>
          {text}
        </Text>
      );
    case 'M':
      return (
        <Text
          style={{
            lineHeight: lineHeightMultipleValue * fontSize,
            color,
            fontSize,
            // fontFamily: 'NotoSansKR-Medium',
            fontWeight: isAndroid ? undefined : '500',
            ...style,
          }}
          numberOfLines={numberOfLines}>
          {text}
        </Text>
      );
    case 'R':
      return (
        <Text
          style={{
            lineHeight: lineHeightMultipleValue * fontSize,
            color,
            fontSize,
            // fontFamily: 'NotoSansKR-Regular',
            fontWeight: isAndroid ? undefined : '400',
            ...style,
          }}
          numberOfLines={numberOfLines}>
          {text}
        </Text>
      );
    case 'L':
      return (
        <Text
          style={{
            lineHeight: lineHeightMultipleValue * fontSize,
            color,
            fontSize,
            // fontFamily: 'NotoSansKR-Light',
            fontWeight: isAndroid ? undefined : '300',
            ...style,
          }}
          numberOfLines={numberOfLines}>
          {text}
        </Text>
      );
    default:
      return (
        <Text
          style={{
            ...style,
            lineHeight: lineHeightMultipleValue * fontSize,
            color,
            fontSize,
            // fontFamily: 'NotoSansKR-Regular',
            fontWeight: isAndroid ? undefined : '400',
          }}>
          {text}
        </Text>
      );
  }
};
