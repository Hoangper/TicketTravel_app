import {makeStyles, normalize} from '@rneui/themed';

const usestyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(99),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    marginVertical: normalize(20),
    width: '100%',
    height: normalize(10),
  },
  buttonText: {
    fontSize: normalize(10),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: 'red',
  },
}));

export default usestyles;
