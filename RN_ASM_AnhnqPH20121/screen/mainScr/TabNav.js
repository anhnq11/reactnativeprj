import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScr from './homeScr/HomeScr';
import Profile from './profileScr/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScr}
        options={{
          title: 'News',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 2
          },
          tabBarActiveTintColor: '#30CF59',
          tabBarIcon: (tabInfo) => {
            return (<Fontisto name='world-o' style={{ fontSize: 24 }} />)
          }
        }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        title: 'Profile',
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 2
        },
        tabBarActiveTintColor: '#30CF59',
        tabBarIcon: (tabInfo) => {
          return (<SimpleLineIcons name='user' style={{ fontSize: 24 }} />)
        }
      }} />

    </Tab.Navigator>
  )
}

export default TabNav