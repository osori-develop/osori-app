import React, {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import WebView from 'react-native-webview';

import {WebViewPresenter} from '~/presenter';
import {isAndroid} from '~/util/universial';

const BACK_PRESS_LISTENER = 'hardwareBackPress';

interface Props {
  title: string;
  uri: string;
  onPressBack: () => void;
}

export default ({title, uri, onPressBack}: Props) => {
  // ref
  const webViewRef = useRef<WebView>(null);

  const onAndroidBackPress = () => {
    if (isAndroid) {
      webViewRef?.current?.goBack();
      // 가끔 안
      return true;
      // if (canGoBack.current && webviewRef.current) {
      //   webviewRef.current.goBack();
      //   return true;
      // }
      // return false;
    }
    return true;
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      BACK_PRESS_LISTENER,
      onAndroidBackPress,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <WebViewPresenter
      webViewRef={webViewRef}
      onPressBack={onPressBack}
      title={title}
      uri={uri}
    />
  );
};
