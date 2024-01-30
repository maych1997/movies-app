import React, {memo, useEffect} from 'react';

import {TouchableOpacity, Image, Text, View, ActivityIndicator} from 'react-native';
import {homeTabStyle} from '../Styles/stylesheet/homeTabStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {color} from '../Styles/colors/color';
import {componentStyle} from '../Styles/stylesheet/componentStyle';
import FastImage from 'react-native-fast-image';
import {baseUri} from '../Network/URI/uri';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import LandscapeDetector from '../Orientation';


const Card = ({item,load,navigation,media_type}) => {
  const isLandscape=LandscapeDetector();
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('MovieStack',{screen:'MovieDetail',params:{Id:item.id,media_type:item?.media_type==undefined?media_type:item?.media_type}})}} style={[homeTabStyle.movieContainer,{
      borderWidth:responsiveHeight(0.5),
      borderRadius:isLandscape?responsiveHeight(2):responsiveHeight(1.5),
      marginLeft:responsiveWidth(1),
      marginRight:responsiveWidth(1),
      marginTop:responsiveHeight(1),
      height:isLandscape?responsiveHeight(60):responsiveHeight(35),
      width:isLandscape?responsiveWidth(25):responsiveWidth(50),
    }]}>
      {load?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size={'large'} color={'#C0392B'} animating={load}></ActivityIndicator></View>:<>
       <AnimatedCircularProgress
       size={40}
       width={5}
       fill={item.vote_average * 10}
       tintColor={
         parseFloat(item.vote_average * 10).toFixed(0) < 70
           ? 'yellow'
           : 'lightgreen'
       }
       style={componentStyle.cardClickStyle}
       backgroundColor={color.baseColor}>
       {() => (
         <View style={componentStyle.container}>
           <Text style={{color: color.textColor}}>
             {parseFloat(item.vote_average * 10).toFixed(0)}%
           </Text>
         </View>
       )}
     </AnimatedCircularProgress>
     <FastImage
       style={homeTabStyle.image}
       source={{uri: baseUri + item?.poster_path}}></FastImage>
     <View style={[homeTabStyle.titleContainer,{
      padding:responsiveHeight(1),
      height:isLandscape?responsiveHeight(17):responsiveHeight(11),
     }]}></View>
     <Text style={[homeTabStyle.movieTitle,{ bottom:isLandscape?responsiveHeight(5):responsiveHeight(3),
    padding:responsiveHeight(1)}]} numberOfLines={2}>
       {item.title!=null?item.title:item.original_name}
     </Text>
     <Text style={[homeTabStyle.releaseDate,{fontSize:isLandscape?responsiveHeight(3.5):responsiveHeight(2),padding:isLandscape?responsiveHeight(1):responsiveHeight(1.17)}]}>{item.release_date!=null?item.release_date:item.first_air_date}</Text></>
      }
    </TouchableOpacity>
  );
};
export default memo(Card);
