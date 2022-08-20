import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';
import {pixel, getShadow} from '~/util';
import {colors, isAndroid} from '~/util/universial';

import {OText} from './OText';

export const OToast = ({toast}: {toast: ToastProps}) => {
  return (
    <TouchableOpacity
      onPress={() => toast.onHide()}
      activeOpacity={1}
      style={{
        width: '100%',
        paddingHorizontal: pixel(24),
        marginTop: pixel(8),
      }}>
      <View
        style={[
          {
            borderRadius: pixel(8),
            backgroundColor: '#1A1A1A',
            width: '100%',
            paddingVertical: pixel(12),
            alignItems: 'center',
            justifyContent: 'center',
          },
          isAndroid
            ? {}
            : getShadow({
                width: 1,
                height: 1,
                opacity: 0.2,
                elevation: 1,
              }),
        ]}>
        <OText
          fontSize={pixel(14)}
          weight="M"
          text={typeof toast.message === 'string' ? toast.message : ''}
          color={colors.white.f}
          style={{textAlign: 'center'}}
        />
      </View>
    </TouchableOpacity>
  );
};
