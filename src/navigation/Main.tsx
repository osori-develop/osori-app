import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import TabNavigation from './TabNavigation';

export default () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <TabNavigation />
    </NavigationContainer>
  );
};
