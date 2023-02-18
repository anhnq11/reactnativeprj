import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './ViewProfileScrStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import NewsItemInPr from '../../profileScr/news/NewsItemInPr'

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const ViewProfileScr = (props) => {
  let data = [
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
        ListHeaderComponent={() => (
          <View style={Style.container}>
            {
              console.log(props.route.inputData)
            }
            <View style={Style.imgIntroBox}>
              <Image source={{ uri: introImg }} style={Style.imgIntro} />
            </View>
            <View style={Style.userInfoBox}>
              <View style={Style.userImgBox}><FontAwesome style={Style.userImg} name='user-circle' /></View>
              <Text style={Style.userName} >{props.route.inputData.name}</Text>
            </View>
            <View style={Style.flInfo}>
              <Text style={Style.postText}>1 Post</Text>
              <Text style={Style.flText}>11 Follower</Text>
            </View>
            <View style={Style.btnContainer}>
              <TouchableOpacity style={Style.btnBoxL}>
                <Ionicons style={Style.btnIcon} name='chatbox-ellipses-outline' />
                <Text style={Style.btnText}>Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.btnBoxR}>
                <Feather style={Style.btnIcon} name='user-plus' />
                <Text style={Style.btnText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>)}
        keyExtractor={item => `${item.id}`}
        data={data}
        horizontal={false}
        renderItem={({ item }) => <NewsItemInPr inputData={item} />}
      />
    </View>
  )
}

export default ViewProfileScr;