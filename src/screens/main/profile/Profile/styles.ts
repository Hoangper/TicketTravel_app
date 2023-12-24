import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  header: {
    flexDirection: 'row',
    height: normalize(60),
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  txtHeader: {
    color: colors.white,
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginLeft: normalize(20),
    paddingHorizontal: normalize(45),
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  avatar: {
    width: normalize(80),
    height: normalize(80),
    borderWidth: 1,
    borderRadius: normalize(50),
    marginStart: normalize(140),
    marginTop: normalize(20),
    borderColor: '#FFF8F8',
    backgroundColor: '#FFF8F8',
  },
  imgAvatar: {
    width: normalize(80),
    height: normalize(80),
  },
  viewTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    marginTop: normalize(10),
    padding: normalize(15),
    alignItems: 'center',
    borderColor: '#EBE9E9',
  },
  phone: {
    color: '#827B7C',
    fontSize: normalize(15),
    fontWeight: '500',
    marginTop: normalize(10),
  },
  number: {
    color: colors.black,
    fontSize: normalize(15),
    fontWeight: '400',
    width: normalize(230),
    textAlign: 'right',
  },
  footer: {
    height: normalize(130),
    paddingHorizontal: normalize(25),
    backgroundColor: colors.white,
    gap: normalize(15),
  },
  button: {
    width: '100%',
    height: normalize(50),
    backgroundColor: colors.main,
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    color: colors.white,
    fontSize: normalize(16),
    fontWeight: '500',
  },
  button2: {
    width: '100%',
    height: normalize(50),
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  txtButton2: {
    color: colors.main,
    fontSize: normalize(16),
    fontWeight: '500',
  },
}));
export default useStyles;
