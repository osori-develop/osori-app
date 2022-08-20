import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider} from 'react-native-toast-notifications';

import {Main} from '~/navigation';
import {bottomSpace, CommonProvider, pixel} from '~/util';
import {OToast} from '~/components';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <CommonProvider>
          <ToastProvider
            offset={pixel(56) + bottomSpace}
            duration={2500}
            animationDuration={200}
            animationType={'slide-in'}
            renderToast={toast => <OToast toast={toast} />}>
            <Main />
          </ToastProvider>
        </CommonProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
