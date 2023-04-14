import {StyleSheet} from 'react-native';

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
      backgroundColor: '#00897b',
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
      borderColor: '#00897b',
    },

    title: {
      ...base_style.title,
      color: '#00897b',
    },
  }),
};
