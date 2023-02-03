import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Style from './NewItemsStyle'

const NewItems = (props) => {
    const { inputData } = props;
    return (
        <View style={Style.container}>

            {/* User Info */}
            <View style={Style.userInfo}>
                <TouchableOpacity style={Style.userImgBox}><FontAwesome name='user-circle' style={Style.userImg} /></TouchableOpacity>
                <View style={Style.userNameBox}>
                    <TouchableOpacity><Text style={Style.userName}>{inputData.name}</Text></TouchableOpacity>
                    <Text style={Style.userTime}>1 hour</Text>
                </View>
                <TouchableOpacity style={Style.followBox}><SimpleLineIcons name='user-follow' style={Style.followImg} /></TouchableOpacity>
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

export default NewItems