import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const WebViewSampleScreen = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <WebView source={{uri: 'https://caredoc.kr'}} />
    </SafeAreaView>
  );
};

export default WebViewSampleScreen;
