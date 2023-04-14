import React from 'react';
import {View, Text} from 'react-native';

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

function Login() {
  return (
    <View style={styles.container}>
      <Text>LOGİN PAGE</Text>
      <Input placeholder="e-postanızı giriniz" />
      <Input placeholder="şifrenizi giriniz" />
      <Button text="Giriş Yap" />
      <Button text="Kayıt Ol" theme="secondary" />
    </View>
  );
}

export default Login;
