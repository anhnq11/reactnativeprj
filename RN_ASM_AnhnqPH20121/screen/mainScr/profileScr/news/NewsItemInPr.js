import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Style from './NewsItemInPrStyle'

const NewsItemInPr = (props) => {
    const { inputData } = props;
    return (
        <View style={Style.container}>

            {/* User Info */}
            <View style={Style.userInfo}>
                <View style={Style.userImgBox}><FontAwesome name='user-circle' style={Style.userImg} /></View>
                <View style={Style.userNameBox}>
                    <View><Text style={Style.userName}>{inputData.name}</Text></View>
                    <Text style={Style.userTime}>1 hour</Text>
                </View>
            </View>

            {/* Content */}
            <View>
                <Text style={Style.contentText}>{inputData.content}</Text>
                <View style={Style.contentImgBox}><Image style={Style.contentImg} resizeMode='cover' source={{ uri: inputData.image }} /></View>
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