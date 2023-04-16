import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkgreen,
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'black',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    fontSize: 18,
    color: 'white',
  },
  date: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'italic',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
