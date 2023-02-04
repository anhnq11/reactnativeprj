import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './ProfileScrStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NewsItemInPr from './news/NewsItemInPr'

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const Profile = ({ navigation }) => {
  let inputData = [
    {
      id: 1,
      name: 'AnhNQ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 2,
      name: 'AnhNQ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
  ];
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
        <View style={Style.container}>
          <View style={Style.imgIntroBox}>
            <Image source={{ uri: introImg }} style={Style.imgIntro} />
          </View>
          <View style={Style.userInfoBox}>
            <View style={Style.userImgBox}><FontAwesome style={Style.userImg} name='user-circle' /></View>
            <Text style={Style.userName} >AnhNQ</Text>
          </View>
          <View style={Style.flInfo}>
            <Text style={Style.postText}>1 Post</Text>
            <Text style={Style.flText}>11 Follower</Text>
          </View>
          <View style={Style.btnContainer}>
            <TouchableOpacity style={Style.btnBoxL}>
              <FontAwesome style={Style.btnIcon} name='edit' />
              <Text style={Style.btnText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.btnBoxR} onPress={() => {
              navigation.navigate("DangNhap")
            }}>
              <MaterialIcons style={Style.btnIcon} name='logout' />
              <Text style={Style.btnText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>)}
        keyExtractor={item => `${item.id}`}
        data={inputData}
        horizontal={false}
        renderItem={({ item }) => <NewsItemInPr inputData={item} />}
      />
    </View>
  )
}

export default Profile