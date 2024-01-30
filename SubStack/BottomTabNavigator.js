import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef, useState} from 'react';
import HomeTab from '../BottomTabs/HomeTab';
import PeopleTab from '../BottomTabs/PeopleTab';
import CartTab from '../BottomTabs/CartTab';
import ProfileTab from '../BottomTabs/ProfileTab';
import SettingsTab from '../BottomTabs/SettingsTab';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
import LandscapeDetector from '../Orientation';
import {useDispatch, useSelector} from 'react-redux';
import {setData} from '../Redux/action';
import {bottomTabStyle} from '../Styles/stylesheet/bottomTabStyle';
import {api, bearer_token} from '../Network/Api/api';
import {color} from '../Styles/colors/color';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MovieStack from './MovieStack';
import NestedStack from '../BottomTabs/Stack/NestedStack';
const Tab = createBottomTabNavigator();
const tabArr = [
  {
    name: 'NestedStack',
    component: NestedStack,
    icon: 'home-outline',
    label: 'Home',
    index: 0,
  },
  {
    name: 'PeopleTab',
    component: PeopleTab,
    icon: 'people-outline',
    label: 'People',
    index: 1,
  },
  {
    name: 'CartTab',
    component: CartTab,
    icon: 'fast-food-outline',
    label: 'Entertainment',
    index: 2,
  },
  {
    name: 'ProfileTab',
    component: ProfileTab,
    icon: 'person-outline',
    label: 'Profile',
    index: 3,
  },
  {
    name: 'SettingsTab',
    component: SettingsTab,
    icon: 'settings-outline',
    label: 'Settings',
    index: 4,
  },
];
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      {tabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            component={item.component}
            name={item.name}></Tab.Screen>
        );
      })}
    </Tab.Navigator>
  );
};

function MyTabBar({state, descriptors, navigation}) {
  const {width} = useWindowDimensions();
  const MARGIN = 16;
  const TOP_BAR_WIDTH = width - 2 * MARGIN;
  const TOP_BAR = TOP_BAR_WIDTH / tabArr.length;
  const [translate] = useState(new Animated.Value(0));
  const dispatch = useDispatch();
  const DATA = useSelector(state => state?.trend);
  const isLandscape = LandscapeDetector();
  const translateTab = index => {
    Animated.spring(translate, {
      toValue: index * TOP_BAR,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
    if (isLandscape) {
      translateTab(state.index);
    }
  
  }, [state.index, width]);

  return (
    <View style={[bottomTabStyle.container, {bottom: MARGIN, width: TOP_BAR_WIDTH,height:isLandscape?responsiveHeight(15):responsiveHeight(7),borderRadius:responsiveHeight(1.5)}]}>
      <View style={[bottomTabStyle.bottomBar, {width: TOP_BAR}]}>
        <Animated.View
          style={[
            bottomTabStyle.bar,
            {transform: [{translateX: translate}],bottom:isLandscape?responsiveHeight(4.5):responsiveHeight(2.2),height:isLandscape?responsiveHeight(15):responsiveHeight(8),width:isLandscape?responsiveWidth(7):responsiveWidth(16.5),borderRadius:isLandscape?responsiveHeight(100):responsiveHeight(25),},
          ]}></Animated.View>
      </View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={bottomTabStyle.barButton}>
            <Animatable.View
              style={bottomTabStyle.iconContainer}
              duration={500}
              animation={
                isFocused
                  ? {
                      from: {transform: [{translateY: 0}]},
                      to: {transform: [{translateY: -20}]},
                      easing: 'ease-in-out-back',
                    }
                  : {
                      from: {transform: [{translateY: -20}]},
                      to: {transform: [{translateY: 0}]},
                      easing: 'ease-in-out-back',
                    }
              }>
              <Icon
                color={isFocused ? color.textColor : color.secondaryColor}
                size={isFocused ? isLandscape==true?responsiveHeight(8) :responsiveHeight(4):isLandscape==false?responsiveHeight(3.5) :responsiveHeight(7)}
                name={
                  isFocused
                    ? tabArr[index].icon.replace('-outline', '')
                    : tabArr[index].icon
                }></Icon>
              <Text
                style={[
                  bottomTabStyle.iconText,
                  {display: isFocused ? 'none' : 'flex',fontSize:index==2?responsiveHeight(isLandscape?3:1.4):responsiveHeight(isLandscape?3:1.5)},
                ]}>
                {tabArr[index].label}
              </Text>
            </Animatable.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabNavigator;
