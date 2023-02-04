import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScr from './HomeScr';
import ViewProfileScr from './viewProfile/ViewProfileScr';

const Stack = createNativeStackNavigator();

function HomeNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScr}/>
        <Stack.Screen name="ViewProfile" component={ViewProfileScr}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNav;