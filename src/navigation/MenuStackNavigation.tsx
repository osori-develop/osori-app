import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MenuMain} from '~/pages';

export default () => {
  const MenuStack = createNativeStackNavigator();

  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuMain"
        component={MenuMain}
        options={{headerShown: false}}
      />
    </MenuStack.Navigator>
  );
};
