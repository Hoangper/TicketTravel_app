import {routes} from '../../constants';
import {Screen} from '../../types';
import SignIn from './sign-in';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignIn,
  },
];
