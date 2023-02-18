import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FriendScr from './FriendScr';
import ViewProfileScr from '../homeScr/viewProfile/ViewProfileScr';

const Stack = createNativeStackNavigator();

const FriendNav = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="User" component={FriendScr}/>
        <Stack.Screen name="ViewProfile" component={ViewProfileScr}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default FriendNav