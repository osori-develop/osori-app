import axios from 'axios';
import {useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import {apiUrl, CommonContext} from '~/util';

interface UseLoginOutput {
  isLoggedIn: boolean;
  onLogIn: (idInput: string, passwordInput: string) => void;
  onLogout: () => void;
  refreshToken: (accessToken: string, refreshToken: string) => void;
}
export const useLogin = (): UseLoginOutput => {
  // hooks
  const {isLoggedIn, setIsLoggedIn} = useContext(CommonContext);

  const onLogIn = (idInput: string, passwordInput: string) => {
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    // TODO: Async Storage & Token 제거
    setIsLoggedIn(true);
  };

  const reIssueNewToken = (accessToken: string, refreshToken: string) => {};

  return {isLoggedIn, onLogIn, onLogOut, reIssueNewToken};
};
