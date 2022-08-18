import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeStackNavigation,
  MenuStackNavigation,
  CommunityStackNavigation,
  RequestStackNavigation,
} from '~/navigation';
import {PImg} from '~/components';
import {ImgUtil} from '~/asset';
import {colors, pixel} from '~/util';

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen
        name="학사 안내"
        component={HomeStackNavigation}
        options={{
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.white.l,
          tabBarIcon: ({focused}) => {
            return (
              <PImg
                source={ImgUtil.icons.tab_home}
                width={pixel(24)}
                aspectRatio={1}
                color={focused ? colors.blue : colors.white.l}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="식사 안내"
        component={MenuStackNavigation}
        options={{
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.white.l,
          tabBarIcon: ({focused}) => {
            return (
              <PImg
                source={ImgUtil.icons.tab_menu}
                width={pixel(24)}
                aspectRatio={1}
                color={focused ? colors.blue : colors.white.l}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="게시판"
        component={CommunityStackNavigation}
        options={{
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.white.l,
          tabBarIcon: ({focused}) => {
            return (
              <PImg
                source={ImgUtil.icons.tab_community}
                width={pixel(24)}
                aspectRatio={1}
                color={focused ? colors.blue : colors.white.l}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="신청"
        component={RequestStackNavigation}
        options={{
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.white.l,
          tabBarIcon: ({focused}) => {
            return (
              <PImg
                source={ImgUtil.icons.tab_request}
                width={pixel(24)}
                aspectRatio={1}
                color={focused ? colors.blue : colors.white.l}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
