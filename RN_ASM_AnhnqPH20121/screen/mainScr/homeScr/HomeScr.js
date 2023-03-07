import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
  RefreshControl,
  Modal,
  Image,
  Alert
} from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewItems from './newsItems/NewItems';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import Style from './HomeStyleScr';
import URL from '../../../UrlAPi';

const HomeScr = ({ navigation }) => {

  const [post, setpost] = useState([])
  const [outPost, setoutPost] = useState([])
  const [userInfo, setuserInfo] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const [isModalShow, setisModalShow] = useState(false)

  const [content, setcontent] = useState()
  const [img, setimg] = useState("")

  // Lấy thông tin người dùng hiện tại trong LS
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

  // Fetch data hiển thị danh sách bài viết
  const getPost = async () => {
    let url = URL + '/posts?_sort=id&_order=desc&_expand=profile'
    try {
      const response = await fetch(url);
      const json = await response.json();
      setpost(json);
    } catch (error) {
      console.error(error);
    }
  }

  // Refresh
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });
    return unsubscribe;
  }, [navigation]);

  // Loadata
  const loadData = React.useCallback(() => {
    setisLoading(true);
    getUserInfo();
    getPost();
    setisLoading(false);
  }, []);

  // Lấy ảnh từ thư viện
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      let _uri = result.assets[0].uri;
      let file_ext = _uri.substring(_uri.lastIndexOf('.') + 1);

      FileSystem.readAsStringAsync(result.assets[0].uri, { encoding: 'base64' })
        .then((res) => {
          setimg("data:image/" + file_ext + ";base64," + res);
          console.log(_uri);
        });
    }
  }

  // Upload new post - server

  const uploadNewPost = () => {
    let newPost = {
      content: content,
      img: img,
      profileId: userInfo.id,
    }

    let urlPost = URL + '/posts'
    fetch(urlPost, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost)
    })
      .then((res) => {
        if (res.status == 201) {
          Alert.alert("Thông báo!", "Đã tải bài viết lên!")
          setisModalShow(false)
          loadData()
          setcontent(null)
          setimg("")
        }
        else {
          Alert.alert("Add Fail!")
          console.log(res.status);
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item) => { return item.id }}
        data={post}
        key={(item) => { return item.id }}
        renderItem={({ item }) => <NewItems inputData={item} navigation={navigation} userInfo={userInfo} onPress={() => { loadData() }}/>}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={loadData} />
        }
      />

      {/* Kiểm tra quyền User */}
      {
        userInfo.type == 0 ? <View></View> :
          <TouchableOpacity style={Style.addBtnBox} onPress={() => setisModalShow(true)}>
            <Entypo name='plus' style={Style.addBtn} />
          </TouchableOpacity>
      }

      {/* Modal Show */}
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isModalShow}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        {/* Modal */}
        <View style={Style.modalBox}>

          <Text style={[Style.modalTitle, { marginTop: 0, textAlign: 'center' }]}>New Post</Text>
          {/* Post Content */}
          <View style={Style.inputBox}>
            <TextInput
              style={Style.inputText}
              placeholder={userInfo.fullname + ", What's on your mind?"}
              multiline
              numberOfLines={1}
              onChangeText={(text) => { setcontent(text) }}
            />
          </View>
          {/* Post Img */}
          <TouchableOpacity style={Style.modalImgBox} onPress={pickImage} >
            {
              img != "" ? <View style={{ width: 300, height: 150 }}><Image source={{ uri: img }} style={{ width: '100%', height: '100%' }} /></View> :
                <View style={Style.btnAddImg}>
                  <Entypo name='upload-to-cloud' style={{ color: 'black', fontSize: 40 }} />
                  <Text style={Style.btnAddImgText}>Upload Image</Text>
                </View>
            }
          </TouchableOpacity>

          {/* Modal button */}
          <View style={Style.modalBtnBox}>
            <TouchableOpacity
              style={Style.modalBtn}
              onPress={() => {
                setisModalShow(false)
                setcontent(null)
                setimg("")
              }}>
              <Text style={Style.modalBtnText}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.modalBtn}
              onPress={() => {
                // if (content == '' && img == '') {
                //   uploadNewPost();
                // } else {
                //   Alert.alert("Thông báo", "Nhập nội dung cho bài viết!")
                // }
                uploadNewPost();
              }}>
              <Text style={Style.modalBtnText}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default HomeScr