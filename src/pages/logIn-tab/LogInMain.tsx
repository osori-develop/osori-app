import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {LogInMainContainer} from '~/container';
import {LoginStackParams} from '~/navigation/LogInStackNavigation';

interface Props {
  navigation: NavigationProp<LoginStackParams, 'LogInMain'>; // 다른 스택에서도 오지만
  route: RouteProp<LoginStackParams, 'LogInMain'>;
}

export default ({navigation, route}: Props) => {
  const navToWeb = (title: string, uri: string) =>
    navigation.navigate('WebViewLogInTab', {title, uri});

  return <LogInMainContainer navToWeb={navToWeb} />;
};
