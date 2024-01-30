import React from "react";
import LandscapeDetector from "../Orientation";
import { Text, View,Image, useWindowDimensions, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animated from 'react-native-animatable';
import { signupStyle } from "../Styles/stylesheet/signupStyle";
import { color } from "../Styles/colors/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
const SignUp=({navigation})=>{
        const isLandscape=LandscapeDetector();
        const SignUp=()=>{
            return(
            <Animated.View duration={1000} animation={'bounceInLeft'} style={[signupStyle.formContainer,{padding:responsiveHeight(isLandscape?2:2.5),gap:responsiveHeight(1.5)}]}>
                <Text style={[signupStyle.signUpText,{fontSize: responsiveFontSize(3)}]}>Sign Up</Text>
           <Text style={signupStyle.createAccountText}>Create account and join us today</Text>
           
           <Text style={[signupStyle.label,{fontSize:responsiveFontSize(2)}]}>Name</Text>
               <TextInput style={[signupStyle.textField,{padding:responsiveHeight(isLandscape?2:1.3)}]}>

               </TextInput>
               <Text style={[signupStyle.label,{fontSize:responsiveFontSize(2)}]}>Email</Text>
               <TextInput style={[signupStyle.textField,{padding:responsiveHeight(isLandscape?2:1.3)}]}>

               </TextInput>
               <Text style={[signupStyle.label,{fontSize:responsiveFontSize(2)}]}>Password</Text>
               <TextInput style={[signupStyle.textField,{padding:responsiveHeight(isLandscape?2:1.3)}]}>

               </TextInput>
               <TouchableOpacity style={[signupStyle.signUpButton,{padding:responsiveHeight(isLandscape?3.5:1.5),marginTop:responsiveHeight(isLandscape?3:2),borderRadius:responsiveHeight(isLandscape?2:1)}]}>
                   <Text style={[signupStyle.signUpText,{fontSize: responsiveFontSize(2.5)}]}>Sign Up</Text>
               </TouchableOpacity>
           </Animated.View>
            )
        }
        return(
            <SafeAreaView style={[signupStyle.container,{flexDirection:isLandscape?'row':'column',padding:responsiveHeight(isLandscape?2:1)}]}>
                      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                         <Icon color={color.textColor} name='arrow-back' size={30}></Icon>
                     </TouchableOpacity>
                    {isLandscape?<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={signupStyle.scrollViewContainer}><SignUp></SignUp></ScrollView>:<SignUp></SignUp>}
                    <Animated.View duration={1000} animation={'bounceInRight'} style={{flex:isLandscape?8:1,justifyContent:'center',alignItems:'center',gap:20}}>
                 <View style={[signupStyle.signUpTextContainer,{paddingTop:responsiveHeight(isLandscape?2:4)}]}>
                     <Text style={[signupStyle.accounText,{fontSize: responsiveFontSize(2.5)}]}>Have an account?</Text> 
                     <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                     <Text style={[signupStyle.signInText,{fontSize: responsiveFontSize(2.5),marginLeft:responsiveWidth(isLandscape?1.5:2.5)}]}>Sign In</Text>
                     </TouchableOpacity>
                 </View>
                
                 <View style={[signupStyle.privacyContainer,{paddingTop:responsiveHeight(isLandscape?15:20)}]}>
                     <Text style={[signupStyle.registerSimpleText,{paddingHorizontal:responsiveWidth(isLandscape?2:4),fontSize:responsiveFontSize(2.5)}]}>By clicking Register, you agree to the</Text>
                    <TouchableOpacity
                    >
                        <Text style={[signupStyle.privacyText,{paddingHorizontal:responsiveWidth(isLandscape?10:18),fontSize:responsiveFontSize(2.5)}]}>Terms & Privacy Policy</Text>
                    </TouchableOpacity>
                 </View>
             </Animated.View>
            </SafeAreaView>
         )
}
export default SignUp;