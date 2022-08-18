import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Main} from '~/navigation';
import {CommonProvider} from '~/util';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <CommonProvider>
          <Main />
        </CommonProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
