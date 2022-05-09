import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import {parseBridgeData} from 'santa_close_common';
import {TabKeys} from '../../TabNavigator';

const WebViewSampleScreen = () => {
  const navigation = useNavigation();
  const webviewRef = useRef<WebView>(null);
  const handleMessage = (event: WebViewMessageEvent) => {
    const data = parseBridgeData(event.nativeEvent.data);
    switch (data.action) {
      case 'navigate':
        navigation.navigate(data.params.to as TabKeys);
        break;
      default:
        break;
    }
    webviewRef.current.injectJavaScript(
      `(function() {
        window.dispatchEvent(
          new MessageEvent('message', 
            {data: ${JSON.stringify({
              id: data.bridgeId,
            })}
            }
          )
        );
        })()`,
    );
  };
  return (
    <SafeAreaView style={{height: '100%'}}>
      <WebView
        ref={webviewRef}
        onMessage={handleMessage}
        source={{uri: 'http://localhost:3001/'}}
      />
    </SafeAreaView>
  );
};

export default WebViewSampleScreen;
