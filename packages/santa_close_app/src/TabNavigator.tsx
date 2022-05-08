import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import HomeScreen from './screens/home';
import WebViewSampleScreen from './screens/webviewSample';

export type TabParamList = {
  Home: undefined;
  WebViewSample: undefined;
};

export type TabKeys = keyof TabParamList;

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
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

export default TabNavigator;
