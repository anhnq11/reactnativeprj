import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Style from './NewItemsStyle'

const NewItems = (props) => {
    const { inputData } = props;
    return (
        <View style={Style.container}>
            <View style={Style.userInfo}>
                <View style={Style.userImgBox}><FontAwesome name='user-circle' style={Style.userImg} /></View>
                <View style={Style.userNameBox}>
                    <Text style={Style.userName}>{inputData.name}</Text>
                    <Text style={Style.userTime}>1 hour</Text>
                </View>
                <View style={Style.followBox}><SimpleLineIcons name='user-follow' style={Style.followImg} /></View>

            </View>
            <View style={Style.contentBox}>
                <Text style={Style.contentText}>{inputData.content}</Text>
                <View style = {Style.contentImgBox}><Image style={Style.contentImg} resizeMode='cover' source={{ uri: inputData.image }} /></View>
            </View>
            <View style={Style.mReactBox}>
                    <View style = {Style.reactBox}>
                        <View style = {Style.iconBox}><FontAwesome name='heart-o' style = {Style.reactIcon} /></View>
                        <Text style = {Style.reactText}>Like</Text>
                    </View>
                    <View style = {Style.reactBox}>
                        <View style = {Style.iconBox}><FontAwesome name='comment-o' style = {Style.reactIcon} /></View>
                        <Text style = {Style.reactText}>Comment</Text>
                    </View>
                    <View style = {Style.reactBox}>
                        <View style = {Style.iconBox}><FontAwesome name='send-o' style = {Style.reactIcon} /></View>
                        <Text style = {Style.reactText}>Share</Text>
                    </View>
                </View>
        </View>
    )
}

export default NewItems