import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LogInMain from '~/pages/logIn-tab/LogInMain';
import LogInStackNavigation from './LogInStackNavigation';

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      })}
      backBehavior="initialRoute">
      <Tab.Screen name="LogIn" component={LogInStackNavigation} />
    </Tab.Navigator>
  );
};
