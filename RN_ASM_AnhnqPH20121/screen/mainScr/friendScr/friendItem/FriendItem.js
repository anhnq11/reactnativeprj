import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from './FriendItemStyle'
import Feather from 'react-native-vector-icons/Feather'

const FriendItem = (props) => {
    const { inputData } = props;
    const { navigate } = props.navigation;
    const viewProfile = () => {
        navigate('ViewProfile');
    }
    const [userInfo, setuserInfo] = useState([]);

    // Lấy thông tin người dùng hiện tại trong LS, hiển thị lên màn hình
    const getUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('loginInfo')
            if (value !== null) {
                setuserInfo(value);
            }
        } catch (e) {
            console.log(e);
        }
    }

    React.useEffect(() => {
        getUserInfo();
    });

    return (
        <View style={Style.container}>
            {
                console.log('Ip Id: ' + typeof(inputData.id))
            }
            {
                console.log('UserId: ' + typeof(userInfo.id))
            }
            {
                inputData.id != userInfo.id ? <TouchableOpacity style={Style.userInfo} onPress={() => viewProfile()}>
                <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: inputData.img }} /></View>
                <View style={Style.userNameBox}>
                    <View><Text style={Style.userName}>{inputData.fullname}</Text></View>
                    <View style={Style.DesBox}>
                        <Text style={Style.userDes}>1 Post</Text>
                        <Text style={Style.userDes}>11 Followers</Text>
                    </View>
                </View>
                {/* {
                    inputData.type == 1 ? <View>
                        <TouchableOpacity style={Style.followBtn}>
                            <Text style={Style.followText}>Follow</Text>
                            <View style={Style.followImgBox}><Feather name='plus' style={Style.followImg} /></View>
                        </TouchableOpacity>
                    </View> : <View></View>
                } */}
                <TouchableOpacity style={Style.followBtn}>
                    <Text style={Style.followText}>Follow</Text>
                    <View style={Style.followImgBox}><Feather name='plus' style={Style.followImg} /></View>
                </TouchableOpacity>
            </TouchableOpacity>:<View></View>
            }
            {/* User Info */}
            
        </View>
    )
}

export default FriendItem