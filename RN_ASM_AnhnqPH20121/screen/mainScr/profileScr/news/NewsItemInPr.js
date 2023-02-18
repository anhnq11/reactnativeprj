import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Style from './NewsItemInPrStyle'
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import URL from '../../../../UrlAPi'

const NewsItemInPr = (props) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Delete', value: '1' }
    ]);

    // Xóa post
    // const deletePost = () => {
    //     Alert.alert("Xác nhận", "Bạn chắc chắn muốn xóa bài viết?", [
    //         {
    //             text: 'Cancel',
    //             style: 'cancel',
    //         },
    //         {
    //             text: 'Xóa', onPress: () => {
    //                 let url = URL + '/posts/' + props.inputData.id

    //                 fetch(url, {
    //                     method: 'DELETE',
    //                     headers: {
    //                         Accept: 'application/json',
    //                         'Content-Type': 'application/json',
    //                     }
    //                 })
    //                     .then((res) => {
    //                         if (res.status == 200) {
    //                             Alert.alert("Thông báo", "Xóa bài viết thành công!");
    //                         }

    //                     })
    //                     .catch((ex) => {
    //                         console.log(ex);
    //                     });
    //             },
    //         }
    //     ])
    // }

    const deletePost = (postId) => {
        props.onPress(postId);
    }


    return (
        <View style={Style.container}>

            {/* User Info */}
            <View style={Style.userInfo}>
                <View style={Style.mUserInfo}>
                    <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: props.userInfo.img }} /></View>
                    <View style={Style.userNameBox}>
                        <Text style={Style.userName}>{props.userInfo.fullname}</Text>
                        {
                            props.userInfo.type == 1 ? <Text style={Style.userType}>Admin</Text> : <Text style={Style.userType}>User</Text>
                        }
                    </View>
                </View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder=""
                    style={Style.dropdownBox}
                    textStyle={{ fontSize: 18 }}
                    labelStyle={{ fontSize: 0 }}
                    dropDownContainerStyle={{
                        backgroundColor: "#white",
                        borderWidth: 0,
                        width: '70%'
                    }}
                    listMode='SCROLLVIEW'
                    onSelectItem={() => {
                        deletePost(props.inputData.id)
                    }}
                />

            </View>
            {/* Content */}
            <View>
                <Text style={Style.contentText}>{props.inputData.content}</Text>
                {
                    props.inputData.img != '' ? <View style={Style.contentImgBox}><Image style={Style.contentImg} source={{ uri: props.inputData.img }} /></View> : <View></View>
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