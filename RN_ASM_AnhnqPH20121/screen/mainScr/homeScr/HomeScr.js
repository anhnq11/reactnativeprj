import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScr = () => {
  return (
    <View>
      <Text>This is HomeScr</Text>
      {/* Include Bottom Navigation */}
    </View>
  )
}

export default HomeScr