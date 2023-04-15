import {StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: Colors.darkgreen,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#eceff1',
      borderWidth: 1,
      borderColor: Colors.darkgreen,
    },

    title: {
      ...base_style.title,
      color: Colors.darkgreen,
    },
  }),
};
