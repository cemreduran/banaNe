import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import styles from './Sign.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Sign({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
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
            <Input
              onChangeText={handleChange('repassword')}
              onBlur={handleBlur('repassword')}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz"
              secureTextEntry={false}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
}

export default Sign;
