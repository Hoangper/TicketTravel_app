import {combineReducers, configureStore} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {PersistConfig, persistStore} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {AppReducer, AuthReducer, LoadingReducer} from '../reducer';
import {Redux} from '../types/redux.type';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: EncryptedStorage,
  timeout: 30000,
  version: 1,
  debug: true,
  stateReconciler: autoMergeLevel2,
  whitelist: [Redux.auth, Redux.app],
  blacklist: [Redux.loading],
};

const rootReducers = combineReducers({
  auth: AuthReducer,
  loading: LoadingReducer,
  app: AppReducer,
});
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
