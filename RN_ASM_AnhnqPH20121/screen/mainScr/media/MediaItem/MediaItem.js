import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './MediaItemStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MediaItem = (props) => {
    const {inputData} = props;
  return (
    <TouchableOpacity style={Style.container}>
      <View style={Style.imgBox}><Ionicons style={Style.songIcon} name='musical-notes-outline'/></View>
      <View style={Style.songInfo}>
        <Text style={Style.songName}>{inputData.name}</Text>
        <Text style={Style.songAuthor}>{inputData.author}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MediaItem