import {StyleSheet} from 'react-native';
import {color} from '../colors/color';
import { fontSize } from '../fonts/fontSize';
export const trailerStyle = StyleSheet.create({
    container: {flex: 1, backgroundColor: color.baseColor,padding:5},
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    height: 300,
    borderColor: color.secondaryColor,
    borderWidth: 3,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  movieContainer:{
    borderWidth:3,
    borderColor:color.secondaryColor,
    borderRadius:15,
    marginLeft:5,
    marginRight:5,
    height:300,
    width:300,
    flex:1,
  },
  image:{
    height:'100%',
    resizeMode:'cover',
    borderRadius:15,
  },
  movieTitle:{
    color:color.textColor,
    position:'absolute',
    bottom:70,padding:10,
    fontSize:fontSize.size18,
    fontWeight:'700'
  },
  releaseDate:{
    color:color.textColor,
    position:'absolute',
    bottom:0,padding:10,
    fontSize:fontSize.size18,
    fontWeight:'700'
  },
  titleContainer:{
    backgroundColor:color.secondaryColor,
    height:130,
    width:'100%',
    position:'absolute',
    bottom:0,
    padding:10,
    opacity:0.5,
  },
  indicatorContainer:{
    flex:1,
    backgroundColor:color.baseColor,
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    fontSize:fontSize.size25,
    marginBottom:10,
    marginLeft:10,
    fontWeight:'800',
    color:color.textColor
  },
  buttonTitle:{
    fontSize:fontSize.size18,
    width:'auto',
    fontWeight:'800',
    color:color.textColor,
    padding:7,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{borderRadius:20,flexDirection:'row',alignItems:'center',width:120,justifyContent:'center'},
  daySelectContainer:{flexDirection:'row',paddingVertical:5}
});
