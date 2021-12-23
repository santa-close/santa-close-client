/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const WebViewSampleScreen = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <WebView source={{uri: 'http://localhost:3000/'}} />
    </SafeAreaView>
  );
};

export default WebViewSampleScreen;
