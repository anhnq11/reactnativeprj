import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FriendItem from './friendItem/FriendItem'

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const FriendScr = () => {
  let inputData = [
    {
      id: 1,
      name: 'AnhNQ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 2,
      name: 'name2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 3,
      name: 'name3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
    },
    {
      id: 4,
      name: 'name4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 5,
      name: 'name5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 6,
      name: 'name6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 7,
      name: 'name7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 8,
      name: 'name8',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
  ];
  return (
    <View>
      <FlatList
      keyExtractor={item => `${item.id}`}
      data={inputData}
      renderItem={({ item }) => <FriendItem inputData = {item} />} 
      />
    </View>
  )
}

export default FriendScr