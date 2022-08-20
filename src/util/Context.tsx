import {useAsyncStorage} from '@react-native-community/async-storage';
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {asyncUtil} from './asyncUtil';

interface CommonContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
  currentToken: string | null;
  setCurrentToken: (v: string) => void;
}
export const CommonContext = createContext<CommonContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  currentToken: null,
  setCurrentToken: () => null,
});

export const CommonProvider = ({children}: {children: ReactNode}) => {
  // login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentToken, _setCurrentToken] = useState<string | null>(null);
  const loginStorage = useAsyncStorage(asyncUtil.loginToken);

  const setCurrentToken = (token: string) => {
    _setCurrentToken(token);
    loginStorage.setItem(token);
  };

  const settingLogin = async () => {
    const token = await loginStorage.getItem();
    if (token) {
      setIsLoggedIn(true);
      setCurrentToken(token);
    } else {
      setIsLoggedIn(false);
    }
  };

  // init values from async storage or something...
  useEffect(() => {
    settingLogin();
  }, []);
  return (
    <CommonContext.Provider
      value={{isLoggedIn, setIsLoggedIn, currentToken, setCurrentToken}}>
      {children}
    </CommonContext.Provider>
  );
};
