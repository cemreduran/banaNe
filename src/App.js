/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';
import Colors from './styles/Colors';
import FloatingButton from './components/FloatingButton';

const Stack = createNativeStackNavigator();

export default () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              title: 'dertler',
              headerTintColor: Colors.darkgreen,
              headerRight: () => (
                <Icon
                  name="logout"
                  color={Colors.darkgreen}
                  size={28}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
