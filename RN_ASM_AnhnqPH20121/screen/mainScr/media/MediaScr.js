import { View, Text } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const videoUrl = 'https://youtu.be/9HCAdNxGixM';

const MediaScr = () => {
  return (
    <View>
      <Video source={{uri: videoUrl}}
       />
    </View>
  )
}

export default MediaScr