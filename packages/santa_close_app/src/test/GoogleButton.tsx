import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleButton = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('이미 진행중');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('서비스 불가');
      } else {
        console.log('에러', error);
      }
    }
  };
  return <Button title="testGoogle" onPress={signIn} />;
};

export default GoogleButton;
