import {StyleSheet} from 'react-native';
import { color } from '../colors/color';
import { fontSize } from '../fonts/fontSize';
export const signupStyle = StyleSheet.create({
  container: {flex:1,backgroundColor:color.baseColor},
  scrollViewContainer:{width:'100%'},
  signUpTextContainer:{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'},
  accounText:{fontWeight:'700',color:color.textColor},
  signInText:{fontWeight:'700',color:color.secondaryColor},
  privacyContainer:{display:'flex',justifyContent:'flex-end',alignItems:'center'},
  registerSimpleText:{fontWeight:'800',color:color.secondaryTextColor},
  privacyText:{fontWeight:'800',color:color.secondaryColor},
  label:{fontWeight:'bold',color:color.textColor},
  textField:{backgroundColor:color.secondaryTextColor},
  formContainer:{flex:1},
  signUpText:{fontWeight:'bold',color:color.textColor},
  createAccountText:{fontSize:fontSize.size20,fontWeight:'bold',color:color.secondaryTextColor},
  signUpButton:{backgroundColor:color.secondaryColor,justifyContent:'center',alignItems:'center'}
});
