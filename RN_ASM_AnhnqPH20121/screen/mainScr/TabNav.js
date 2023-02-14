import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeNav from './homeScr/HomeNav';
import FriendNav from './friendScr/FriendNav';
import MediaScr from './media/MediaScr';
import Profile from './profileScr/ProfileScr';

import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

const activeColor = '#30CF59';

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNav}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 0,
            color: 'white'
          },
          tabBarActiveTintColor: activeColor,
          tabBarIcon: () => {
            return (<SimpleLineIcons name='globe' style={{ fontSize: 24, }}/>)
          },
          tabBarActiveBackgroundColor: activeColor
        }} />

      <Tab.Screen name="Friend" component={FriendNav}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 0,
          },
          tabBarActiveTintColor: activeColor,
          tabBarIcon: () => {
            return (<Feather name='users' style={{ fontSize: 24, }}/>)
          },
          tabBarActiveBackgroundColor: activeColor
        }} />

      <Tab.Screen name="Music" component={MediaScr}
        options={{
          tabBarLabelStyle: {
            fontSize: 0,
          },
          tabBarActiveTintColor: activeColor,
          tabBarIcon: () => {
            return (<Feather name='music' style={{ fontSize: 24, }}/>)
          },
          tabBarActiveBackgroundColor: activeColor
        }} />

        <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabelStyle: {
            fontSize: 0,
          },
          tabBarActiveTintColor: activeColor,
          tabBarIcon: () => {
            return (<FontAwesome name='user-o' style={{ fontSize: 24, }}/>)
          },
          tabBarActiveBackgroundColor: activeColor
        }} />
    </Tab.Navigator>
  )
}

export default TabNav