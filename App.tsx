import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View,SafeAreaView, useWindowDimensions } from "react-native";
import Splash from "./Screens/Splash";
import Intro from "./Screens/Intro";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import ForgotPassword from "./Screens/ForgotPassword";
import Dashboard from "./Screens/Dashboard";
import { Provider } from 'react-redux';
import store from './Redux/store';
import MovieStack from './SubStack/MovieStack';

function App(){
  const Stack=createNativeStackNavigator();
  
  return(
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
                <Stack.Screen name="Intro" component={Intro}></Stack.Screen>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
  )
}
export default App;