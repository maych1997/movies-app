import {StyleSheet} from 'react-native';
import {color} from '../colors/color';
import { fontSize } from '../fonts/fontSize';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export const homeTabStyle = StyleSheet.create({
    container: 
      {
        flex: 1, 
        backgroundColor: color.baseColor,
        padding:responsiveHeight(2)
      },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: responsiveHeight(1.5),
    height: responsiveHeight(30),
    borderColor: color.secondaryColor,
    borderWidth: 3,
    elevation: 2,
  },
  itemName: {
    fontSize: responsiveFontSize(1.6),
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: responsiveFontSize(1.2),
    color: '#fff',
  },
  movieContainer:{
    borderColor:color.secondaryColor,
    flex:1,
  },
  image:{
    flex:1,
    resizeMode:'contain',
    borderRadius:responsiveHeight(1.5),
  },
  movieTitle:{
    color:color.textColor,
    position:'absolute',
    fontSize:fontSize.size18,
    fontWeight:'700'
  },
  releaseDate:{
    color:color.textColor,
    position:'absolute',
    bottom:0,
    fontWeight:'700'
  },
  titleContainer:{
    backgroundColor:color.secondaryColor,
    width:'100%',
    position:'absolute',
    bottom:0,
    opacity:0.5,
  },
  indicatorContainer:{
    flex:1,
    backgroundColor:color.baseColor,
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    marginBottom:responsiveHeight(1),
    marginLeft:responsiveWidth(1),
    fontWeight:'800',
    color:color.textColor
  },
  buttonTitle:{
    fontWeight:'800',
    color:color.textColor,
    padding:responsiveHeight(1),
  },
  buttonContainer:{flexDirection:'row',alignItems:'center',justifyContent:'center'},
  daySelectContainer:{flexDirection:'row',paddingVertical:5}
});
