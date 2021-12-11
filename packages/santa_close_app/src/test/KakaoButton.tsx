import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import React from 'react';
import {Button} from 'react-native';

const KakaoButton = () => {
  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    console.log(token);
  };
  return <Button title="testKakao" onPress={signInWithKakao} />;
};

export default KakaoButton;
