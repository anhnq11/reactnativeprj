import { View, Text, Image, FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './ProfileScrStyle'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NewsItemInPr from './news/NewsItemInPr'

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const Profile = ({ navigation }) => {

  const [userInfo, setuserInfo] = useState({})
  const [postCount, setpostCount] = useState(0)
  const [post, setpost] = useState([])
  const [isLoading, setisLoading] = useState(false)

  // Lấy thông tin người dùng hiện tại trong LS, hiển thị lên màn hình
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfo')
      if (value !== null) {
        setuserInfo(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Fetch data hiển thị danh sách bài viết của người dùng lên màn hình
  const getPost = async () => { 
    let url = 'http://192.168.106.105:3000/posts?author=' + userInfo.id;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setpost(json);
      setpostCount(json.length);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getPost();
      getUserInfo();
    });
    return unsubscribe;
  }, [navigation]);

  // Loadata
  const loadData = React.useCallback(() => {
    setisLoading(true);
    getPost();
    getUserInfo();
    setisLoading(false);
  }, []);


  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <View style={Style.container}>
            <View style={Style.imgIntroBox}>
              <Image source={{ uri: introImg }} style={Style.imgIntro} />
            </View>
            <View style={Style.userInfoBox}>
              <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: userInfo.img }} /></View>
              <Text style={Style.userName} >{userInfo.fullname}</Text>
            </View>
            <View style={Style.flInfo}>
              <Text style={Style.postText}>{postCount} Post</Text>
              <Text style={Style.flText}>11 Follower</Text>
            </View>
            <View style={Style.btnContainer}>
              <TouchableOpacity style={Style.btnBoxL} onPress={() => {
              }}>
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
        keyExtractor={(item) => { return item.id }}
        data={post}
        renderItem={({ item }) => <NewsItemInPr inputData={item} userInfo={userInfo}/>}
        key={(item) => { return item.id }}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={loadData} />
          }
      />
    </View>
  )
}

export default Profile