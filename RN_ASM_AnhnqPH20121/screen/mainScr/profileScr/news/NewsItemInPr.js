import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Style from './NewsItemInPrStyle'

const NewsItemInPr = (props) => {
    return (
        <View style={Style.container}>

            {/* User Info */}
            <View style={Style.userInfo}>
                <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: props.userInfo.img }} /></View>
                <View style={Style.userNameBox}>
                    <Text style={Style.userName}>{props.userInfo.fullname}</Text>
                    {
                        props.userInfo.type == 1 ? <Text style={Style.userType}>Admin</Text>:<Text style={Style.userType}>User</Text>
                    }
                </View>
            </View>
            {/* Content */}
            <View>
                <Text style={Style.contentText}>{props.inputData.content}</Text>
                {
                    props.inputData.img != '' ? <View style={Style.contentImgBox}><Image style={Style.contentImg} source={{ uri: props.inputData.img }}/></View>:<View></View>
                }
            </View>

            {/* React Icon */}
            <View style={Style.mReactBox}>
                <TouchableOpacity style={Style.reactBox}>
                    <View style={Style.iconBox}><FontAwesome name='heart-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.reactBox}>
                    <View style={Style.iconBox}><FontAwesome name='comment-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.reactBox}>
                    <View style={Style.iconBox}><FontAwesome name='send-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewsItemInPr