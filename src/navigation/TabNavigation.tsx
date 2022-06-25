import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigation from './HomeStackNavigation';
import MyStackNavigation from './MyStackNavigation';

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => <Text>{route.name}</Text>,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigation} />
      <Tab.Screen name="MyTab" component={MyStackNavigation} />
    </Tab.Navigator>
  );
};
