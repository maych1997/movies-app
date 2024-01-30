import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LandscapeDetector from '../Orientation';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {introStyle} from '../Styles/stylesheet/introStyle';
import {color} from '../Styles/colors/color';
import { fontSize } from '../Styles/fonts/fontSize';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Intro = ({navigation}) => {
  const isLandscape = LandscapeDetector();
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);
  const {width,height,fontScale} = useWindowDimensions();
 
  const scrollToIndex = index => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(index - swiperRef.current.state.index);
      setIndex(index);
    }
  };
  useEffect(() => {
    if (index == 1) {
      swiperRef.current.scrollBy(index - swiperRef.current.state.index);
      setIndex(index);
    }
  },[]);
  return (
    <SafeAreaView
      style={[
        introStyle.container,
        {flexDirection: isLandscape ? 'row' : 'column',paddingVertical:isLandscape?responsiveHeight(1):responsiveHeight(2)},
      ]}>
      <View
        style={[introStyle.secondaryContainer, {flex: isLandscape ? 1 : 2}]}>
        <Text style={introStyle.mainText}>Movie App</Text>
        <Swiper
          loop={false}
          scrollEnabled={false}
          ref={swiperRef}
          dotStyle={{top: isLandscape ?  responsiveHeight(5): responsiveHeight(10), height: isLandscape? responsiveHeight(3):responsiveHeight(1.5),
    width: isLandscape?responsiveWidth(1.5):responsiveWidth(3),
    borderRadius: responsiveHeight(100)}}
          activeDotStyle={[introStyle.swiperActiveDot,
            {top: isLandscape ?  responsiveHeight(5): responsiveHeight(10),height: isLandscape? responsiveHeight(3):responsiveHeight(1.5),
              width: isLandscape?responsiveWidth(1.5):responsiveWidth(3),
              borderRadius: responsiveHeight(100)}
          ]}>
          <View style={[introStyle.swiperImageContainer,{padding:responsiveHeight(2)}]}>
            <Image
              style={[
                introStyle.swiperImage,
                {height: responsiveHeight(40)},
              ]}
              source={{
                uri: 'https://freepngimg.com/thumb/the_incredibles/30291-4-the-incredibles-free-download.png',
              }}></Image>
            <Text style={[introStyle.mainText,{fontSize:responsiveFontSize(3)}]}>
              All your favourite movies online
            </Text>
            <Text style={[introStyle.secondaryText,{fontSize:responsiveFontSize(3)}]}>
              Watch your favourite movies with us everyday now
            </Text>
          </View>
          <View style={introStyle.swiperImageContainer}>
            <Image
              style={[
                introStyle.swiperImage,
                {height: responsiveHeight(40)},
              ]}
              source={{
                uri: 'https://www.freepnglogos.com/uploads/avengers-png/avengers-png-transparent-avengers-Images-pluspng-6.png',
              }}></Image>
            <Text style={[introStyle.mainText,{fontSize:responsiveFontSize(3)}]}>
              Get your favourite shows here
            </Text>
            <Text style={[introStyle.secondaryText,{fontSize:responsiveFontSize(3)}]}>
              Your Cinematic World, Anytime, Anywhere.
            </Text>
          </View>
        </Swiper>
      </View>

      <View style={[introStyle.buttonContainer,{ gap: isLandscape?responsiveHeight(2.5):responsiveHeight(1.5), padding: isLandscape?responsiveHeight(4):responsiveHeight(2.5)}]}>
        <TouchableOpacity
          onPress={() => {
            scrollToIndex(1);
          }}
          style={[
            introStyle.continueButton,
            {display: index == 1 ? 'none' : 'flex',
            height: isLandscape?responsiveHeight(13):responsiveHeight(6.5),
            borderRadius: isLandscape?responsiveHeight(2.5):responsiveHeight(1),
            top: responsiveHeight(2.5),
          },
          ]}>
          <Animated.Text
            animation={'pulse'}
            duration={2000}
            style={[introStyle.continueText,{fontSize:responsiveFontSize(2.5)}]}>
            Continue
          </Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          disabled={index == 1 ? false : true}
          style={[
            introStyle.loginButton,
            {
              backgroundColor:
                index == 1 ? color.secondaryColor : color.secondaryTextColor,
                height: isLandscape?responsiveHeight(13):responsiveHeight(6.5),
                borderRadius: isLandscape?responsiveHeight(2.5):responsiveHeight(1),
                top: responsiveHeight(2.5),
            },
          ]}>
          <Animated.Text
            animation={'pulse'}
            duration={2000}
            style={[
              introStyle.loginText,
              {color: index == 1 ? '#fff' : '#C0392B'},
              {fontSize:responsiveFontSize(2.5)}
            ]}>
            Get Started
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Intro;
