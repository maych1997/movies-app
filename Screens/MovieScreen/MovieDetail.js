import React, { useEffect, useState } from "react";
import { ImageBackground, View,Text } from "react-native";
import { color } from "../../Styles/colors/color";
import { api } from "../../Network/Api/api";
import { apisecretkey } from "../../Network/Api/keys";
import FastImage from "react-native-fast-image";
import { baseUri } from "../../Network/URI/uri";
import { Image } from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

const MovieDetail=({route})=>{
    const [data,setData]=useState();
    const fetchMovieDetail=async()=>{
        const resp = await fetch(api+route.params.media_type+'/'+route.params.Id+apisecretkey);
        const data = await resp.json();
        setData(data);
    }
    const fetchReleaseDate=async()=>{
        const resp = await fetch(api+route.params.media_type+'/'+route.params.Id+'/release_dates'+apisecretkey);
        const data = await resp.json();
       console.log(data);
    }
    useEffect(() => {
        fetchMovieDetail();
        fetchReleaseDate();
      }, []);
    return(
        <ScrollView contentContainerStyle={{flex:1,backgroundColor:color.baseColor}}>
         
                <ImageBackground resizeMode="cover" source={{uri:baseUri+data?.backdrop_path}}>
                    <View style={{padding:20,gap:15,flexDirection:'row',backgroundColor: '#000000c0'}}>
                        <Image style={{ width: 150,
                            height:225,resizeMode:'contain',alignSelf:'center',borderWidth:1}} source={{uri:baseUri+data?.poster_path}}></Image>
                        <View style={{}}>
                            <Text style={{fontSize:20,color:color.textColor,fontWeight:'700',width:'70%'}}>{data?.title}</Text>
                            <Text style={{fontSize:20,color:color.textColor,fontWeight:'700',width:'70%'}}>{data?.title}</Text>
                        </View>
                    </View>
                </ImageBackground>
          
        </ScrollView>
    )
}
export default MovieDetail;