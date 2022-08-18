import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RequestMain} from '~/pages';

export default () => {
  const Login = createNativeStackNavigator();

  return (
    <Login.Navigator>
      <Login.Screen
        name="LogIn"
        component={RequestMain}
        options={{headerShown: false}}
      />
    </Login.Navigator>
  );
};
