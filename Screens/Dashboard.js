import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView,TouchableOpacity,View,Text } from "react-native";
import Home from "../SubStack/BottomTabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { color } from "../Styles/colors/color";
import { fontSize } from "../Styles/fonts/fontSize";
const Dashboard=()=>{
    const Drawer=createDrawerNavigator();
    return(
        <Drawer.Navigator 
        screenOptions={({navigation})=>({
            headerLeft:()=>{
                return(
                    <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                    <Icon name={'menu'} color={color.secondaryColor} size={33}></Icon>
                </TouchableOpacity>
                )
            },
            headerTitleAlign:'center',
            headerRight:()=>{
                return(
                    <TouchableOpacity>
                        <Icon name={'search'} color={color.secondaryColor} size={33}></Icon>
                    </TouchableOpacity>
                )
            },
            headerShadowVisible:true,
            headerLeftContainerStyle:{paddingLeft:10},
            headerRightContainerStyle:{paddingRight:10},
            drawerLabelStyle:{color:color.secondaryColor,fontSize:fontSize.size15},
            drawerActiveTintColor:color.secondaryColor,
            headerTintColor:color.secondaryColor
        })}
        initialRouteName="Home">
            <Drawer.Screen component={Home} name="Home">

            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default Dashboard;