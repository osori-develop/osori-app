import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RequestMain} from '~/pages';

export default () => {
  const RequestStack = createNativeStackNavigator();

  return (
    <RequestStack.Navigator>
      <RequestStack.Screen
        name="RequestMain"
        component={RequestMain}
        options={{headerShown: false}}
      />
    </RequestStack.Navigator>
  );
};
