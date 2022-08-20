import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import WebView from 'react-native-webview';

import {colors, pixel} from '~/util';
import {Img, OText, StatusMargin} from '~/components';
import {imgUtil} from '~/asset';

interface Props {
  title: string;
  uri: string;
  webViewRef: React.RefObject<WebView>;
  onPressBack: () => void;
}

export default ({title, uri, webViewRef, onPressBack}: Props) => {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={{flex: 1, backgroundColor: colors.white.f}}>
      <StatusMargin />
      <View
        style={{
          height: pixel(60),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={onPressBack}
          style={{position: 'absolute', left: pixel(24)}}>
          <Img
            source={imgUtil.icons.left_bracket}
            width={pixel(30)}
            aspectRatio={1}
            color={colors.blue}
          />
        </TouchableOpacity>
        <OText text={title} color={colors.black.d} weight={'B'} fontSize={18} />
      </View>

      <View style={{flex: 1}}>
        <WebView
          ref={webViewRef}
          source={{uri}}
          style={{flex: 1}}
          onLoadEnd={() => setIsLoading(false)}
          renderLoading={() => <ActivityIndicator color={colors.blue} />}
        />
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.white.f,
            }}>
            <ActivityIndicator color={colors.blue} />
          </View>
        )}
      </View>
    </View>
  );
};
