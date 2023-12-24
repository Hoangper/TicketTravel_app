import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(() => ({
  container: {},
  tabStyle: {
    backgroundColor: 'blue',
  },
  containerTabView: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    color: 'black',
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: 'blue',
  },
}));

export default useStyles;
