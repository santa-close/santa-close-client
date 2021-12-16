/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import HomeScreen from './screens/home';
import WebViewSampleScreen from './screens/webviewSample';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          options={{headerShown: false}}
          name="WebViewSample"
          component={WebViewSampleScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
