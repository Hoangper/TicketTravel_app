import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Update_Profile from './Update-Profile';

export {default as Profile} from './Profile';

export const profileScreens: Screen[] = [
  {
    name: routes.UPDATE_PROFILE,
    component: Update_Profile,
  },
];
