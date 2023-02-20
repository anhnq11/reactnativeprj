import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Style from './FriendItemStyle'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../UrlAPi'

const FriendItem = (props) => {

    const { inputData } = props

    const [flCount, setflCount] = useState(0)
    const [follow, setfollow] = useState([])
    const [userInfo, setuserInfo] = useState({})

    // Xóa post
    const deleteAcc = () => {
        Alert.alert("Xác nhận", "Bạn chắc chắn muốn xóa tài khoản?", [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Xóa', onPress: () => {
                    let url = URL + '/profiles/' + inputData.id

                    fetch(url, {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                        .then((res) => {
                            if (res.status == 200) {
                                Alert.alert("Thông báo", "Xóa tài khoản thành công!");
                                props.onRefresh();
                            }
                        })
                        .catch((ex) => {
                            console.log(ex);
                        });
                },
            }
        ])
    }

    // Fetch Data Follows
    const getFollows = async (value) => {
        let url = URL + '/follows?flId=' + value.id // Value là tài khoản đang đăng nhập
        try {
            const response = await fetch(url);
            const json = await response.json();
            setfollow(json);
        } catch (error) {
            console.error(error);
        }
    }

    // Đếm số lượng người Follow
  const getFollowCount = async (value) => {
    let url = URL + '/follows?profileId=' + inputData.id
    try {
      const response = await fetch(url);
      const json = await response.json();
      setflCount(json.length);
    } catch (error) {
      console.error(error);
    }
  }

    // Lấy thông tin người dùng hiện tại trong LS
    const getUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('loginInfo')
            if (value !== null) {
                getFollows(JSON.parse(value))
                getFollowCount()
                setuserInfo(JSON.parse(value));
            }
        } catch (e) {
            console.log(e);
        }
    }

    // Refresh
    React.useEffect(() => {
        loadData();
    }, []);

    // LoadData - Gọi lại dữ liệu
    const loadData = React.useCallback(() => {
        getUserInfo();
        console.log(follow);
    }, []);

    return (
        <View style={Style.container}>
            {
                <View style={Style.userInfo}>
                    <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: inputData.img }} /></View>
                    <View style={Style.userNameBox}>
                        <View><Text style={Style.userName}>{inputData.fullname}</Text></View>
                        {
                            inputData.type == 1 ? <View style={Style.DesBox}>
                                <Text style={Style.userDes}>@{inputData.name}</Text>
                                <Text style={Style.userDes}>| {flCount} Followers</Text>
                            </View> : <View></View>
                        }

                    </View>
                    {
                        // Tài khoản Admin -> Hiện nút Follow
                        inputData.type == 1 ? <View>
                            {
                                // follow.forEach(element => {
                                    // (inputData.id === follow.profileId) ? 
                                    // <TouchableOpacity style={Style.followBtn}>
                                    //     {console.log('T' + inputData.id + inputData.name + follow.profileId)}
                                    //     <Text style={Style.followText}>UnFollow</Text>
                                    //     <View style={Style.followImgBox}><Feather name='plus' style={Style.followImg} /></View>
                                    // </TouchableOpacity>
                                    //  :
                                        <TouchableOpacity style={Style.followBtn}>
                                            {/* {console.log("F" + inputData.id + inputData.name + follow.profileId)} */}
                                            <Text style={Style.followText}>Follow</Text>
                                            <View style={Style.followImgBox}><Feather name='plus' style={Style.followImg} /></View>
                                        </TouchableOpacity>
                                // })
                            }
                        </View> : <View>
                            {
                                // Không phải tài khoản Admin, User đang là Admin -> Xóa / Trống
                                userInfo.type == 1 ? <TouchableOpacity onPress={() => { deleteAcc() }}><Feather name='delete' style={Style.deleteIcon} /></TouchableOpacity> : <View></View>
                            }
                        </View>
                    }
                </View>
            }
            {/* User Info */}
        </View>
    )
}

export default FriendItem