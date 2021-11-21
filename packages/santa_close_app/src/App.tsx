/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import KakaoButton from './test/KakaoButton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginBottom: 30,
          }}>
          Test용 페이지 입니다.
        </Text>
        <KakaoButton />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
