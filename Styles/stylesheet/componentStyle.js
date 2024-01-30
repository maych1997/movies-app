import {StyleSheet} from 'react-native';
import {color} from '../colors/color';
export const componentStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    top: 4,
  },
  cardClickStyle: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    paddingTop: 5,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
