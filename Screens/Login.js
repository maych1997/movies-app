import React from 'react';
import {
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import LandscapeDetector from '../Orientation';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animated from 'react-native-animatable';
import {loginStyle} from '../Styles/stylesheet/loginStyle';
import {fontSize} from '../Styles/fonts/fontSize';
import {color} from '../Styles/colors/color';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Login = ({navigation}) => {
  const isLandscape = LandscapeDetector();
  const {height, width, fontScale} = useWindowDimensions();
  return (
    <SafeAreaView
      style={[
        loginStyle.container,
        {
          flexDirection: isLandscape ? 'row' : 'column',
          padding: responsiveHeight(2),
          gap:isLandscape?responsiveHeight(2):0
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-back" color={color.textColor} size={30}></Icon>
      </TouchableOpacity>
      <Animated.View
        animation={isLandscape ? 'bounceInLeft' : 'bounceInLeft'}
        duration={1000}
        style={[
          loginStyle.subContainer1,
          {
            flex: isLandscape ? 1 : 1.5,
            gap: isLandscape ? responsiveHeight(1.5) : responsiveHeight(2),
            padding: responsiveHeight(1.5),
          },
        ]}>
        <Text
          style={[
            loginStyle.primaryFont,
            {fontSize:responsiveFontSize(3.5)},
          ]}>
          Welcome Back
        </Text>
        <Text
          style={[
            loginStyle.secondaryText,
            {fontSize:responsiveFontSize(3)},
          ]}>
          Sign in your Account
        </Text>
        <Text
          style={[
            loginStyle.primaryFontWithSize,
            {fontSize: responsiveFontSize(2)},
          ]}>
          Email
        </Text>
        <TextInput
          style={[loginStyle.textFields, {padding: isLandscape?responsiveHeight(2):responsiveHeight(1)}]}></TextInput>
        <Text
          style={[
            loginStyle.primaryFontWithSize,
            {fontSize: responsiveFontSize(2)},
          ]}>
          Password
        </Text>
        <TextInput
          style={[loginStyle.textFields, {padding: isLandscape?responsiveHeight(2):responsiveHeight(1)}]}></TextInput>
        <TouchableOpacity>
          <Text
            style={[
              loginStyle.primaryFontWithSize,
              {fontSize: responsiveFontSize(2)},
            ]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          style={[
            loginStyle.loginButton,
            {padding: isLandscape?responsiveFontSize(1.5):responsiveHeight(1.5), borderRadius: isLandscape?responsiveHeight(2.5):responsiveHeight(1)},
          ]}>
          <Text
            style={[
              loginStyle.loginText,
              {fontSize: responsiveFontSize(2.5)},
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={[loginStyle.signUpView, {gap: isLandscape?responsiveHeight(1.5):responsiveHeight(1.5)}]}>
          <Text
            style={[
              loginStyle.signUpText,
              {fontSize: responsiveFontSize(2.5)},
            ]}>
            Dont have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={[
                loginStyle.signUpTextColored,
                {fontSize: responsiveFontSize(2.5)},
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View
        duration={1000}
        animation={isLandscape ? 'bounceInRight' : 'bounceInRight'}
        style={[
          loginStyle.subContainer2,
          {
            justifyContent: isLandscape ? 'center' : 'flex-start',
            gap: responsiveHeight(1),
          },
        ]}>
        <View style={loginStyle.seperatorView}>
          <View style={loginStyle.seperator}></View>
          <Text
            style={[
              loginStyle.seperatorText,
              {paddingHorizontal: responsiveWidth(3)},
            ]}>
            in With
          </Text>
          <View style={loginStyle.seperator}></View>
        </View>
        <View style={loginStyle.buttonContainer}>
          <TouchableOpacity
            style={[
              loginStyle.googleContainer,
              {
                padding:isLandscape?responsiveHeight(4):responsiveHeight(1.5),
                marginTop: responsiveHeight(5),
                gap: isLandscape?0:responsiveHeight(1),                
              },
            ]}>
            <Image
              style={[
                loginStyle.buttonLogo,
                {height: responsiveHeight(4), width: responsiveWidth(4)},
              ]}
              source={require('../assets/images/google.png')}></Image>
            <Text
              style={[
                loginStyle.buttonText,
                {fontSize: responsiveFontSize(2.5)},
              ]}>
              Sign In with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              loginStyle.appleContainer,
              {
                padding:isLandscape?responsiveHeight(4):responsiveHeight(1.5),
                marginTop: isLandscape?responsiveHeight(2):responsiveHeight(1),
                gap: isLandscape?0:responsiveHeight(1),                  
              },
            ]}>
            <Image
              style={[
                loginStyle.buttonLogo,
                {height: responsiveHeight(5), width: responsiveWidth(5)},
              ]}
              source={require('../assets/images/apple.png')}></Image>
            <Text
              style={[
                loginStyle.buttonText,
                {fontSize: responsiveFontSize(2.5)},
              ]}>
              Sign In with Apple
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Login;
