import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default Input;
