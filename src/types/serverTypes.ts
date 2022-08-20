export interface SignUpArgs {
  email: string;
  password: string;
}

export interface SignUpReturn {
  accessToken: string;
  accessTokenExpiresIn: number;
  grantType: string;
  refreshToken: string;
}
