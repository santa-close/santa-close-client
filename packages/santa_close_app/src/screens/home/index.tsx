/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import GoogleButton from '../../test/GoogleButton';
import KakaoButton from '../../test/KakaoButton';

const HomeScreen = () => {
  return (
    <View>
      <Text>홈</Text>
      <View style={{justifyContent: 'space-around', height: '100%'}}>
        <KakaoButton />
        <GoogleButton />
      </View>
    </View>
  );
};

export default HomeScreen;
