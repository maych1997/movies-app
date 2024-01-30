import {StyleSheet} from 'react-native';
import {color} from '../colors/color';
import { fontSize } from '../fonts/fontSize';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

export const introStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.baseColor,
  },
  secondaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {fontWeight: '800', color: color.textColor,fontSize:responsiveFontSize(3.5)},
  secondaryText: {
    fontWeight: '800',
    color: color.secondaryTextColor,
    textAlign: 'center',
  },

  swiperActiveDot: {   
    backgroundColor: color.secondaryColor,
  },
  swiperImageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImage: {
    resizeMode: 'contain',
    width: '80%',
  },
  continueButton: {
    backgroundColor: color.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {color: color.textColor,  fontWeight: '700'},
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: '700',
  },
  buttonContainer: {flex: 1, justifyContent: 'center'},
});
