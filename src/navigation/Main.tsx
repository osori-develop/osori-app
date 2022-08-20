import React, {useContext, useEffect} from 'react';
import {CommonContext} from '~/util';

import LoginTab from './LoginTab';
import TabNavigation from './TabNavigation';

export default () => {
  const {isLoggedIn} = useContext(CommonContext);

  if (!isLoggedIn) {
    return <LoginTab />;
  }

  return <TabNavigation />;
};
