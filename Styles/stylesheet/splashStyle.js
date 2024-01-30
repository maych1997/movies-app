import {StyleSheet} from 'react-native';
import {color} from '../colors/color'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.baseColor,
  },
  logo: {resizeMode: 'contain',height:responsiveHeight(50),width:responsiveWidth(50)},
});
