import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Messages.style';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState();

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    console.log(contentObject);
    database().ref('messages/').push(contentObject);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
