import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './FriendItemStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const FriendItem = (props) => {
    const { inputData } = props;
    return (
        <View style={Style.container}>
            {/* User Info */}
            <TouchableOpacity style={Style.userInfo}>
                <View style={Style.userImgBox}><FontAwesome name='user-circle' style={Style.userImg} /></View>
                <View style={Style.userNameBox}>
                    <View><Text style={Style.userName}>{inputData.name}</Text></View>
                    <View style={Style.DesBox}>
                        <Text style={Style.userDes}>1 Post</Text>
                        <Text style={Style.userDes}>11 Followers</Text>
                    </View>
                </View>
                <TouchableOpacity style={Style.followBtn}>
                    <Text style={Style.followText}>Follow</Text>
                    <View style={Style.followImgBox}><Feather name='plus' style={Style.followImg}/></View>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default FriendItem