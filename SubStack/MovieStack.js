import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import MovieDetail from "../Screens/MovieScreen/MovieDetail";

const Stack=createNativeStackNavigator();
const MovieStack=()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="MovieDetail">
            <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default MovieStack;