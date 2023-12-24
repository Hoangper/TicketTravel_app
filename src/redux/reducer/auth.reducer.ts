import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthState} from '../types';
import {Redux} from '../types/redux.type';
import {UpdateProfileDto} from '../dto';

const initialState: AuthState = {
  enableSignIn: false,
  accessToken: '',
  refreshToken: '',
  user: {},
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
   
  },
});

export const AuthActions = reducer.actions;
export const AuthReducer = reducer.reducer;
