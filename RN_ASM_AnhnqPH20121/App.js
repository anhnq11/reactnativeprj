// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScr from './screen/introScr/IntroScr';
import DangKyScr from './screen/dangKyScr/DangKyScr';
import DangNhapScr from './screen/dangNhapScr/DangNhapScr';
import TabNav from './screen/mainScr/TabNav';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScr} options = {{headerShown: false}}/>
        <Stack.Screen name="DangNhap" component={DangNhapScr} options = {{headerShown: false}}/>
        <Stack.Screen name="DangKy" component={DangKyScr} options = {{headerShown: false}}/>
        <Stack.Screen name="TabNav" component={TabNav} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;