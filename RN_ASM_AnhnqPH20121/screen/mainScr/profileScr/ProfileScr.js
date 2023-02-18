import {
  View,
  Text,
  Image,
  RefreshControl,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Alert
} from 'react-native'
import React from 'react'
import Style from './ProfileScrStyle'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NewsItemInPr from './news/NewsItemInPr'
import URL from '../../../UrlAPi';

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const Profile = ({ navigation }) => {

  const [userInfo, setuserInfo] = useState({})
  const [postCount, setpostCount] = useState(0)
  const [post, setpost] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isModalShow, setisModalShow] = useState(false)
  const [flCount, setflCount] = useState(0)

  const [name, setname] = useState(userInfo.name);
  const [img, setimg] = useState("")


  // Lấy thông tin người dùng hiện tại trong LS, hiển thị lên màn hình
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfo')
      if (value !== null) {
        getPost(JSON.parse(value));
        getFollows(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Fetch data hiển thị danh sách bài viết của người dùng lên màn hình
  const getPost = async (value) => {
    let url = URL + '/posts?profileId=' + value.id + '&_sort=id&_order=desc'
    setimg(value.img)
    setname(value.fullname)
    setuserInfo(value)
    try {
      const response = await fetch(url);
      const json = await response.json();
      setpost(json);
      setpostCount(json.length);
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch Data Follows
  const getFollows = async (value) => {
    let url = URL + '/follows?profileId=' + value.id
    try {
      const response = await fetch(url);
      const json = await response.json();
      setflCount(json.length);
    } catch (error) {
      console.error(error);
    }
  }

  // Refresh
  React.useEffect(() => {
    loadData();
  }, []);

  // LoadData - Gọi lại dữ liệu
  const loadData = React.useCallback(() => {
    setisLoading(true);
    getUserInfo();
    setisLoading(false);
  }, []);

  // Lấy ảnh từ thư viện
  const pickImage = async () => {
    console.log("Pick Img!");
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
          console.log(img);
        });
    }
  }

  // Update thông tin tài khoản
  const editProfile = () => {
    if (name != '') {
      let obj = {
        id: userInfo.id,
        name: userInfo.name,
        password: userInfo.password,
        fullname: name,
        type: userInfo.type,
        img: img
      };
      let url = URL + '/profiles/' + userInfo.id

      fetch(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      })
        .then(async (res) => {
          if (res.status == 200)
            setuserInfo(obj);
          // Lưu đè thông tin đăng nhập vào LS
          try {
            await AsyncStorage.setItem('loginInfo', JSON.stringify(obj))
          } catch (e) {
            console.log(e);
          }
        })
        .catch((ex) => {
          console.log(ex);
        });
    } else {
      Alert.alert('Thông báo', 'Tên người dùng không được để trống!')
    }
  }

  // Xóa post
  const deletePost = (postId) => {
    Alert.alert("Xác nhận", "Bạn chắc chắn muốn xóa bài viết?", [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Xóa', onPress: () => {
          let url = URL + '/posts/' + postId

          fetch(url, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          })
            .then((res) => {
              if (res.status == 200) {
                Alert.alert("Thông báo", "Xóa bài viết thành công!");
                loadData();
              }

            })
            .catch((ex) => {
              console.log(ex);
            });
        },
      }
    ])
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={loadData} />
      }
    >
      <View style={Style.container}>
        {/* Chứa ảnh */}
        <View style={Style.imgIntroBox}>
          <Image source={{ uri: introImg }} style={Style.imgIntro} />
        </View>
        {/* Chứa tên */}
        <View style={Style.userInfoBox}>
          <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: userInfo.img }} /></View>
          <Text style={Style.userName} >{userInfo.fullname}</Text>
        </View>
        {/* Thông tin người dùng */}
        <View style={Style.flInfo}>
          <Text style={Style.postText}>{postCount} Post</Text>
          <Text style={Style.flText}>{flCount} Follower</Text>
        </View>
        <View style={Style.btnContainer}>
          <TouchableOpacity style={Style.btnBoxL} onPress={() => { setisModalShow(true) }}>
            <FontAwesome style={Style.btnIcon} name='edit' />
            <Text style={Style.btnText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Style.btnBoxR} onPress={() => {
            Alert.alert("Xác nhận", "Đăng xuất tài khoản!", [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              { text: 'OK', onPress: () => navigation.navigate("DangNhap") },
            ])
          }}>
            <MaterialIcons style={Style.btnIcon} name='logout' />
            <Text style={Style.btnText}>Log out</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Show */}
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={isModalShow}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>

          <View style={Style.modalBox}>
            <Text style={[Style.userName, { marginTop: 0, textAlign: 'center' }]}>Chỉnh sửa hồ sơ</Text>
            <TouchableOpacity style={Style.modalImgBox} onPress={pickImage} >
              {
                img != "" ? <View style={Style.modalImgBox}><Image source={{ uri: img }} style={Style.modalImg} /></View> : <View style={Style.modalImgBox}><Image source={{ uri: userInfo.img }} style={Style.modalImg} /></View>
              }
            </TouchableOpacity>
            <View style={Style.inputBox}>
              <TextInput style={Style.inputText} placeholder={userInfo.fullname} onChangeText={(text) => { setname(text) }} />
            </View>

            {/* Modal button */}
            <View style={Style.modalBtnBox}>
              <TouchableOpacity
                style={Style.modalBtn}
                onPress={() => {
                  setisModalShow(false)
                }}>
                <Text style={Style.modalBtnText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.modalBtn}
                onPress={() => {
                  editProfile();
                  setisModalShow(false)
                }}>
                <Text style={Style.modalBtnText}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* List dữ liệu */}
      {
        post.map((item) => <NewsItemInPr key={item.id}
          inputData={item} userInfo={userInfo}
          onPress={(postId) => deletePost(postId)}
        />)
      }

    </ScrollView>
  )
}

export default Profile