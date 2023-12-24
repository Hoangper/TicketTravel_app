export type AppStatus = {
  isReady: boolean;
  isLoading: boolean;
};

export type AuthState = {
  enableSignIn: boolean;
  accessToken: string;
  refreshToken: string;
  user: Partial<User>;
};

export type User = {};
