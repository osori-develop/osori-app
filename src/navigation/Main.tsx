import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {Text, View} from 'react-native';

export default () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HELLO WORLD</Text>
      </View>
    </NavigationContainer>
  );
};
