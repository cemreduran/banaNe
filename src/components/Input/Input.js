import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, onChangeText, value, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {/* <Icon name={iconName} size={25} color="gray" /> */}
    </View>
  );
};

export default Input;
