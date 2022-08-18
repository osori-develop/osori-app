import React from 'react';

import LoginTab from './LoginTab';
import TabNavigation from './TabNavigation';

export default () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <LoginTab />;
  }

  return <TabNavigation />;
};
