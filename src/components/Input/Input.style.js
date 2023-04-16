import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: Platform.OS === 'android' ? 0 : 5,
  },
});
