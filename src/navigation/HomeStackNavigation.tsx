import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeMain from '~/pages/home-tab/HomeMain';

export default () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
