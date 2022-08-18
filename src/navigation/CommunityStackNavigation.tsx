import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CommunityMain} from '~/pages';

export default () => {
  const CommunityStack = createNativeStackNavigator();

  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="CommunityMain"
        component={CommunityMain}
        options={{headerShown: false}}
      />
    </CommunityStack.Navigator>
  );
};
