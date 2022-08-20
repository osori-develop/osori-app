import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {WebViewContainer} from '~/container';
import {LoginStackParams} from '~/navigation/LogInStackNavigation';

interface Props {
  navigation: NavigationProp<LoginStackParams, 'WebViewLogInTab'>; // 다른 스택에서도 오지만
  route: RouteProp<LoginStackParams, 'WebViewLogInTab'>;
}

// WebView는 예외적으로 Screen부터 공통으로 공유한다.
export default ({navigation, route}: Props) => {
  // vals
  const {title, uri} = route.params;

  // funcs
  const navGoBack = () => navigation.goBack();

  return <WebViewContainer title={title} uri={uri} onPressBack={navGoBack} />;
};
