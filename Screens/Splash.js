import React, {useEffect} from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import * as Animated from 'react-native-animatable';
import {splashStyle} from '../Styles/stylesheet/splashStyle';
import LandscapeDetector from '../Orientation';


const Splash = ({navigation}) => {
  const isLandscape=LandscapeDetector();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Intro');
    }, 2000);
  },[])
  return (
    <View style={splashStyle.container}>
      <Animated.Image
        duration={800}
        animation={'bounceIn'}
        style={splashStyle.logo}
        source={{
          uri: 'https://www.pngmart.com/files/5/Movie-PNG-Image.png',
        }}></Animated.Image>
    </View>
  );
};
export default Splash;
