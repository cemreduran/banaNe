import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  function handleSignUp() {
    return navigation.navigate('SignPage');
  }

  function handleFormSubmit(values) {
    console.log(values);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bana NE?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleBlur, handleSubmit}) => (
          <>
            <Input
              onChangeText={handleChange('usermail')}
              onBlur={handleBlur('usermail')}
              value={values.usermail}
              placeholder="E-postanızı giriniz"
            />
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Şifrenizi giriniz"
              secureTextEntry={true} // not work??
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default Login;
