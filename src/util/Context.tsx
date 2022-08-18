import React, {createContext, ReactNode, useState} from 'react';

interface CommonContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
}
export const CommonContext = createContext<CommonContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
});

export const CommonProvider = ({children}: {children: ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <CommonContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </CommonContext.Provider>
  );
};
