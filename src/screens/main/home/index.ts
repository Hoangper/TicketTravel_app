import {routes} from '../../../constants';
import {Screen} from '../../../types';
import TestScreen from './TestScreen';

export {default as Home} from './Home';
export const homeScreens: Screen[] = [
  {
    name: routes.TESTSCREEN,
    component: TestScreen,
  },
];
