import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';

import styles from './Sign.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Sign({navigation}) {
  function handleLogin() {
    navigation.goBack();
  }

  function handleFormSubmit(FormValues) {
    console.log(FormValues);
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
              secureTextEntry={true} // not work?
            />
            <Input
              onChangeText={handleChange('repassword')}
              onBlur={handleBlur('repassword')}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz"
              secureTextEntry={true} //not work?
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
}

export default Sign;
