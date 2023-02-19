import { View, Text, Image } from 'react-native'
import React from 'react'
import Style from './NotifyScrStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'

const img = 'https://www.svgrepo.com/show/56246/notification.svg';

const NotifyScr = () => {
  return (
    <View style={Style.container}>
      <View style={Style.imgBox}><Ionicons name='notifications-off' style={Style.img} /></View>
      <Text style={Style.text}>No notices right now!</Text>
    </View>
  )
}

export default NotifyScr