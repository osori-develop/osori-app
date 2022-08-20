import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginMain, RequestMain, WebViewLoginTab} from '~/pages';

export interface WebViewParam {
  title: string;
  uri: string;
}

export type LoginStackParams = {
  LogInMain: undefined;
  WebViewLogInTab: WebViewParam;
};

export default () => {
  const Login = createNativeStackNavigator<LoginStackParams>();

  return (
    <Login.Navigator>
      <Login.Screen
        name="LogInMain"
        component={LoginMain}
        options={{headerShown: false}}
      />
      <Login.Screen
        name="WebViewLogInTab"
        component={WebViewLoginTab}
        options={{headerShown: false}}
      />
    </Login.Navigator>
  );
};
