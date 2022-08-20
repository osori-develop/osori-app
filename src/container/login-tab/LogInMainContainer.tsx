import axios, {Axios, AxiosError} from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {useMutation} from 'react-query';
import {LoginMainPresenter} from '~/presenter';
import {SignUpArgs, SignUpReturn} from '~/types/serverTypes';
import {apiUrl, CommonContext} from '~/util';

interface Props {
  navToWeb: (title: string, uri: string) => void;
}
export default ({navToWeb}: Props) => {
  // hooks
  const {setIsLoggedIn, currentToken, setCurrentToken} =
    useContext(CommonContext);

  // queries ans muations
  const {mutate, isLoading} = useMutation<SignUpReturn, AxiosError, SignUpArgs>(
    async ({email, password}) => {
      const {data} = await axios.post(`${apiUrl}/auth/signup`, {
        email,
        password,
      });
      return data;
    },
    {
      onSuccess: ({accessToken}) => {
        setCurrentToken(accessToken);
        setIsLoggedIn(true);
        console.log('SUCCESS', accessToken);
      },
      onError: e => {
        console.log('🥲🥲🥲, error: ', JSON.stringify(e));
      },
    },
  );

  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAgreeTerm, setIsAgreeTerm] = useState<boolean>(false);

  const onLogin = () => {
    mutate({email: identifier, password});
    // setIsLoggedIn(true);
  };

  return (
    <LoginMainPresenter
      isAgreeTerm={isAgreeTerm}
      setIdentifier={setIdentifier}
      setPassword={setPassword}
      setIsAgreeTerm={setIsAgreeTerm}
      isClear={identifier !== '' && password !== '' && isAgreeTerm}
      onLogin={onLogin}
      isLoading={isLoading}
      onPressTerm={() => navToWeb('개인정보 취급방침', 'https://google.com')}
    />
  );
};
