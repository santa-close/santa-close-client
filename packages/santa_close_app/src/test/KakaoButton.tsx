import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import React from 'react';
import {View, Button} from 'react-native';

const KakaoButton = () => {
  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    console.log(token);
  };
  return (
    <View>
      <Button title="test" onPress={signInWithKakao}>
        testKakao
      </Button>
    </View>
  );
};

export default KakaoButton;
