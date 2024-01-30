import React, {useEffect, useState,useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Touchable,
  Pressable,
  ActivityIndicator,
  VirtualizedList,
  FlatListComponent,
  useWindowDimensions,
} from 'react-native';
import {Image} from 'react-native-animatable';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {useDispatch, useSelector} from 'react-redux';
import LandscapeDetector from '../Orientation';
import {homeTabStyle} from '../Styles/stylesheet/homeTabStyle';
import Card from '../Component/Card';
import {color} from '../Styles/colors/color';
import {setDiscover, setTrailerId, setTrend} from '../Redux/action';
import DropDownPicker from 'react-native-dropdown-picker';
import {api} from '../Network/Api/api';
import {apisecretkey} from '../Network/Api/keys';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const HomeTab = ({navigation}) => {
  const dispatch = useDispatch();
  const isLandscape = LandscapeDetector();
  const {height,fontScale}=useWindowDimensions();
  const button = [
    {name: 'day', title: 'Today', index: 0},
    {name: 'week', title: 'This Week', index: 1},
  ];
  const [indexSelected, setIndex] = useState(0);
  const button1 = [
    {name: 'movie', title: 'Movie', index: 0},
    {name: 'tv', title: 'TV', index: 1},
  ];
  const [indexSelected1, setIndex1] = useState(0);
  const button2 = [
    {name: 'day', title: 'Today', index: 0},
    {name: 'week', title: 'This Week', index: 1},
  ];
  const [indexSelected2, setIndex2] = useState(0);
  const button3 = [
    {name: 'day', title: 'Today', index: 0},
    {name: 'week', title: 'This Week', index: 1},
  ];
  const [indexSelected3, setIndex3] = useState(0);
  const [trending, setTrending] = useState();
  const [discover, setDiscover] = useState();
  const [latestMovie, setLatestMovie] = useState();
  const [latestTv, setLatestTv] = useState();
  const [load, setLoad] = useState(true);
  const [load2, setLoad2] = useState(true);
  const [load3, setLoad3] = useState(true);
  const [load4, setLoad4] = useState(true);
  const [loadScreen,setLoadScreen]=useState(true);
 
  useEffect(() => {
    Promise.all([
      fetch(api + 'trending/all/' + button[indexSelected].name + apisecretkey),
      fetch(api + 'discover/' + button1[indexSelected1].name + apisecretkey),
      fetch(
        api + 'trending/movie/' + button2[indexSelected2].name + apisecretkey,
      ),
      fetch(api + 'trending/tv/' + button3[indexSelected3].name + apisecretkey),
    ])
      .then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          }),
        );
      })
      .then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here
        setTrending(data[0].results);
        setDiscover(data[1].results);
        setLatestMovie(data[2].results);
        setLatestTv(data[3].results);
        setLoad(false);
        setLoad2(false);
        setLoad3(false);
        setLoad4(false);
        setLoadScreen(false);
      })
      .catch(function (error) {
        // if there's an error, log it
        console.log(error);
      });
  }, [indexSelected, indexSelected1, indexSelected2, indexSelected3]);
  return (
    <View style={{backgroundColor: color.baseColor,justifyContent:'center',alignItems:'center',flex:1}}>
      {loadScreen==true?<ActivityIndicator size={'large'} animating={loadScreen} color={color.secondaryColor}></ActivityIndicator>: <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{padding: isLandscape?responsiveHeight(2):responsiveHeight(1), paddingBottom: isLandscape?responsiveHeight(25):responsiveHeight(12)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding:isLandscape?responsiveHeight(1):0
          }}>
          <Text style={[homeTabStyle.heading,{fontSize:responsiveFontSize(2.5)}]}>Trending</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: responsiveHeight(0.2),
                borderColor: color.secondaryColor,
                justifyContent: 'center',
                borderRadius:responsiveHeight(10),
                alignItems:'center'
              }}>
              {button.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      homeTabStyle.buttonContainer,
                      {
                        backgroundColor:
                          button[index].index == indexSelected
                            ? color.secondaryColor
                            : color.baseColor,
                            borderRadius:responsiveHeight(10),
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setIndex(button[index].index);
                        setLoad(true);
                      }}
                      style={{justifyContent: 'center',alignItems:'center'}}>
                      <Text style={[homeTabStyle.buttonTitle,{fontSize:responsiveFontSize(2),padding:isLandscape?responsiveHeight(2):responsiveHeight(1.5),width:isLandscape?responsiveWidth(18):responsiveWidth(30),borderRadius: responsiveHeight(10),textAlign:'center'}]}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <FlatList
          initialNumToRender={2}
          maxToRenderPerBatch={4}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          renderItem={({item, index}) => {
            return <Card media_type={button1[indexSelected1].name} navigation={navigation} load={load} key={index} item={item}></Card>;
          }}></FlatList>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: isLandscape?responsiveHeight(2):responsiveHeight(1),
            justifyContent: 'center',
            alignItems: 'center',
            padding:isLandscape?responsiveHeight(1):0
          }}>
          <Text style={[homeTabStyle.heading,{fontSize:responsiveFontSize(2.5)}]}>Discover</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: responsiveHeight(0.2),
                borderColor: color.secondaryColor,
                justifyContent: 'center',
                borderRadius:responsiveHeight(10),
                alignItems:'center'
              }}>
              {button1.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      homeTabStyle.buttonContainer,
                      {
                        backgroundColor:
                          button1[index].index == indexSelected1
                            ? color.secondaryColor
                            : color.baseColor,
                            borderRadius:responsiveHeight(10),
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setIndex1(button1[index].index);
                        setLoad2(true);
                      }}
                      style={{justifyContent: 'center'}}>
                      <Text  style={[homeTabStyle.buttonTitle,{fontSize:responsiveFontSize(2),padding:isLandscape?responsiveHeight(2):responsiveHeight(1.5),width:isLandscape?responsiveWidth(18):responsiveWidth(30),borderRadius: responsiveHeight(10),textAlign:'center'}]}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <FlatList
          initialNumToRender={2}
          maxToRenderPerBatch={4}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={discover}
          renderItem={({item, index}) => {
            return <Card media_type={button1[indexSelected1].name} navigation={navigation} load={load2} key={index} item={item}></Card>;
          }}></FlatList>
        <View
          style={{
            flexDirection: 'row',
             marginVertical: isLandscape?responsiveHeight(2):responsiveHeight(1),
            justifyContent: 'center',
            alignItems: 'center',
            padding:isLandscape?responsiveHeight(1):0
          }}>
          <Text style={[homeTabStyle.heading,{fontSize:responsiveFontSize(2.5)}]}>Latest Movie</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: responsiveHeight(0.2),
                borderColor: color.secondaryColor,
                justifyContent: 'center',
                borderRadius:responsiveHeight(10),
                alignItems:'center'
              }}>
              {button2.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      homeTabStyle.buttonContainer,
                      {
                        backgroundColor:
                          button2[index].index == indexSelected2
                            ? color.secondaryColor
                            : color.baseColor,
                            borderRadius:responsiveHeight(10),
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setIndex2(button2[index].index);
                        setLoad3(true);
                      }}
                      style={{justifyContent: 'center'}}>
                      <Text  style={[homeTabStyle.buttonTitle,{fontSize:responsiveFontSize(2),padding:isLandscape?responsiveHeight(2):responsiveHeight(1.5),width:isLandscape?responsiveWidth(18):responsiveWidth(30),borderRadius: responsiveHeight(10),textAlign:'center'}]}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <FlatList
          initialNumToRender={2}
          maxToRenderPerBatch={4}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={latestMovie}
          renderItem={({item, index}) => {
            return <Card media_type={button1[indexSelected1].name} navigation={navigation} load={load3} key={index} item={item}></Card>;
          }}></FlatList>
        <View
          style={{
            flexDirection: 'row',
             marginVertical: isLandscape?responsiveHeight(2):responsiveHeight(1),
            justifyContent: 'center',
            alignItems: 'center',
            padding:isLandscape?responsiveHeight(1):0
          }}>
          <Text style={[homeTabStyle.heading,{fontSize:responsiveFontSize(2.5)}]}>Latest Show</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: responsiveHeight(0.2),
                borderColor: color.secondaryColor,
                justifyContent: 'center',
                borderRadius:responsiveHeight(10),
                alignItems:'center'
              }}>
              {button3.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      homeTabStyle.buttonContainer,
                      {
                        backgroundColor:
                          button3[index].index == indexSelected3
                            ? color.secondaryColor
                            : color.baseColor,
                            borderRadius:responsiveHeight(10),
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setIndex3(button3[index].index);
                        setLoad4(true);
                      }}
                      style={{justifyContent: 'center'}}>
                      <Text  style={[homeTabStyle.buttonTitle,{fontSize:responsiveFontSize(2),padding:isLandscape?responsiveHeight(2):responsiveHeight(1.5),width:isLandscape?responsiveWidth(18):responsiveWidth(30),borderRadius: responsiveHeight(10),textAlign:'center'}]}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <FlatList
          initialNumToRender={2}
          maxToRenderPerBatch={4}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={latestTv}
          renderItem={({item, index}) => {
            return <Card media_type={button1[indexSelected1].name} navigation={navigation} load={load4} key={index} item={item}></Card>;
          }}></FlatList>
      </ScrollView>}
    </View>
  );
};

export default HomeTab;
