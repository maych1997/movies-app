import {StyleSheet} from 'react-native';
import {color} from '../colors/color';
import {fontSize} from '../fonts/fontSize';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.baseColor,
  },
  subContainer1: {justifyContent: 'center'},
  subContainer2: {flex: 1, alignItems: 'center'},
  primaryFont: {fontWeight: 'bold', color: color.textColor},
  primaryFontWithSize: {
    fontWeight: 'bold',
    color: color.textColor,
  },
  secondaryText: {fontWeight: 'bold', color: color.secondaryTextColor},
  textFields: {backgroundColor: color.secondaryTextColor},
  loginButton: {
    backgroundColor: color.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: color.textColor,
    fontWeight: '700',
  },
  signUpView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontWeight: '700',
    color: color.secondaryTextColor,
  },
  signUpTextColored: {
    fontWeight: '700',
    color: color.secondaryColor,
  },
  seperatorView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  seperator: {
    width: '40%',
    borderWidth: 1,
    borderColor: color.secondaryTextColor,
  },
  seperatorText: {
    fontWeight: '800',
    color: color.secondaryTextColor,
  },
  buttonContainer: {width: '60%'},
  googleContainer: {
    borderWidth: 2,
    borderColor: color.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  
  },
  appleContainer: {
    borderWidth: 2,
    borderColor: color.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {color: color.textColor,fontWeight: '700'},
  buttonLogo: {resizeMode: 'contain'},
});
