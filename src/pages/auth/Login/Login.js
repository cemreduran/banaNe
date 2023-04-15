import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleSignUp() {
    return navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
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
              secureTextEntry={false}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default Login;
