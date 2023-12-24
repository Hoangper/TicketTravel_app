import {RootState} from '../store';

export const getAuthEnableSignIn = (state: RootState) =>
  state.auth.enableSignIn;

export const getAuthUserProfile = (state: RootState) => state.auth.user;
