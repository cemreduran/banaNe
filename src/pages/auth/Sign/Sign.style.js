import {StyleSheet, Platform} from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  header: {
    color: Colors.darkgreen,
    margin: 5,
    fontSize: Platform.OS === 'android' ? 120 : 160,
  },
});
