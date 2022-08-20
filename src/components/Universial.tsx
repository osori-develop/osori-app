import React from 'react';
import {View} from 'react-native';
import {statusBarHeight} from '~/util';

interface MarginProps {
  isHorizontal?: boolean;
  margin: number;
}
export const Margin = ({isHorizontal = false, margin}: MarginProps) => {
  return (
    <View
      style={{
        width: isHorizontal ? margin : '100%',
        height: isHorizontal ? '100%' : margin,
      }}
    />
  );
};

export const StatusMargin = () => {
  return <Margin margin={statusBarHeight} />;
};
