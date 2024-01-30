import {StyleSheet} from 'react-native';
import { color } from '../colors/color';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export const bottomTabStyle = StyleSheet.create({
  container: {
    justifyContent:'space-around',backgroundColor:color.textColor,flexDirection: 'row',position:'absolute',alignSelf:'center',alignItems:'center'
  },
  bottomBar:{alignItems:'center',position:'absolute'},
  bar:{backgroundColor:color.secondaryColor,borderWidth:4, borderColor:color.textColor},
  barButton:{ alignItems:'center',flex:1},
  iconContainer:{alignItems:'center'},
  iconText:{textAlign:'center',color:color.secondaryColor}
});
