import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MovieStack from "../../SubStack/MovieStack";
import HomeTab from "../HomeTab";
const Stack=createNativeStackNavigator();
const NestedStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeTab">
            <Stack.Screen name="HomeTab" component={HomeTab}></Stack.Screen>
            <Stack.Screen name="MovieStack" component={MovieStack}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NestedStack;