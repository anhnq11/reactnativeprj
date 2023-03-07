import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Style from './FriendItemStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../UrlAPi'

const FriendItem = (props) => {

    const { inputData } = props
    const { user } = props

    const [flCount, setflCount] = useState(0)
    const [follow, setfollow] = useState([])
    const [isTrue, setisTrue] = useState(false)
    const [flid, setflid] = useState()

    // Xóa tài khoản quyền User
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

    // Lấy các tài khoản đang được Follow
    const getFollows = async (userId) => {
        let url = URL + '/follows?flId=' + userId // Value là tài khoản đang đăng nhập
        try {
            const response = await fetch(url);
            const json = await response.json();
            await setfollow(json);
        } catch (error) {
            console.error(error);
        }
    }

    // Đếm số lượng người Follow của từng Item với quyền Admin
    const getFollowCount = async () => {
        let url = URL + '/follows?profileId=' + inputData.id
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
    const loadData = React.useCallback(async () => {
        getFollows(user.id)
        getFollowCount();
        setflid()
        follow.forEach(element => {
            if (inputData.id == element.profileId) {
                setisTrue(true)
                setflid(element.id)
            }
        })
    }, []);

    // Thêm Follow
    const addFl = (profileId, flId) => {
        let fl = {
            profileId: profileId,
            flId: flId,
        }

        let urlPost = URL + '/follows'
        fetch(urlPost, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fl)
        })
            .then((res) => {
                if (res.status == 201) {
                    loadData();
                    console.log("Đã Flow");
                    setisTrue(true)
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

    // UnFollow
    const unFl = (flid) => {
        Alert.alert("Xác nhận", "Bạn chắc chắn muốn hủy theo dõi người này?", [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Hủy', onPress: () => {
                    let url = URL + '/follows/' + flid

                    fetch(url, {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                        .then((res) => {
                            if (res.status == 200) {
                                Alert.alert("Thông báo", "Đã hủy theo dõi!");
                                loadData();
                                setisTrue(false)
                            }
                            else {
                                console.log(res.status);
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
                    <View>
                        {
                            // Tài khoản Admin -> Hiện nút Follow
                            inputData.type == 1 ? <View>
                                {
                                    (isTrue) ?
                                        <View>
                                            <TouchableOpacity style={Style.followBtn} onPress={() => {
                                                unFl(flid)
                                            }}>
                                                <Text style={Style.followText}>UnFollow</Text>
                                                {/* <View style={Style.followImgBox}><Ionicons name='remove-circle-outline' style={Style.followImg} /></View> */}
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <View>
                                            <TouchableOpacity style={Style.followBtn} onPress={() => {
                                                addFl(inputData.id, user.id)
                                            }}>
                                                <Text style={Style.followText}>Follow</Text>
                                                <View style={Style.followImgBox}><Ionicons name='add-circle-outline' style={Style.followImg} /></View>
                                            </TouchableOpacity>
                                        </View>
                                }
                            </View> : <View>
                                {
                                    // Không phải tài khoản Admin, User đang là Admin -> Xóa / Trống
                                    user.type == 1 ? <TouchableOpacity onPress={() => { deleteAcc() }}><Feather name='delete' style={Style.deleteIcon} /></TouchableOpacity> : <View></View>
                                }
                            </View>
                        }
                    </View>
                </View>
            }
            {/* User Info */}
        </View>
    )
}

export default FriendItem