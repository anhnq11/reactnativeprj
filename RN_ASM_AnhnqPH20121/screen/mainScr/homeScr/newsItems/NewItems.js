import { View, Text, Image, TouchableOpacity, Alert, Modal, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Style from './NewItemsStyle'
import URL from '../../../../UrlAPi'

const NewItems = (props) => {

    const [isModalShow, setisModalShow] = useState(false)
    const [comt, setcomt] = useState([])
    const [comment, setcomment] = useState('')
    const [isLoading, setisLoading] = useState(false)

    // Fetch Comments bài viết - server
    const getCmts = async () => {
        let url = URL + '/cmts?postId=' + props.inputData.id + '&_expand=profile'
        try {
            const response = await fetch(url);
            const json = await response.json();
            setcomt(json);
        } catch (error) {
            console.error(error);
        }
    }

    // Refresh
    React.useEffect(() => {
        loadData();
        return;
    }, []);

    // Loadata
    const loadData = React.useCallback(() => {
        setisLoading(true);
        getCmts();
        setisLoading(false);
    }, []);

    const addNewCmt = () => {
        let newCmt = {
            postId: props.inputData.id,
            profileId: props.inputData.profile.id,
            cmt: comment
        }
        let urlPost = URL + '/cmts'
        fetch(urlPost, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCmt)
        })
            .then((res) => {
                if (res.status == 201) {
                    loadData()
                    setcomment('')
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

    return (
        <View style={Style.container}>

            {/* User Info */}
            <View style={Style.userInfo}>
                <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: props.inputData.profile.img }} /></View>
                <View style={Style.userNameBox}><Text style={Style.userName}>{props.inputData.profile.fullname}</Text>
                </View>
                {/* Follow Button */}
                {
                    props.inputData.profile.id == props.userInfo.id ? <View></View> :
                        <TouchableOpacity style={Style.followBox}><SimpleLineIcons name='user-follow' style={Style.followImg} /></TouchableOpacity>
                }
            </View>

            {/* Content */}
            <View>
                <Text style={Style.contentText}>{props.inputData.content}</Text>
                {
                    props.inputData.img != "" ? <View style={Style.contentImgBox}><Image style={Style.contentImg} source={{ uri: props.inputData.img }} /></View> : <View></View>
                }
            </View>

            {/* React Icon */}
            <View style={Style.mReactBox}>
                <TouchableOpacity style={Style.reactBox}>
                    <View style={Style.iconBox}><FontAwesome name='heart-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.reactBox} onPress={(() => {
                    setisModalShow(true)
                    getCmts();
                })}>
                    <View style={Style.iconBox}><FontAwesome name='comment-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.reactBox}>
                    <View style={Style.iconBox}><FontAwesome name='send-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>Share</Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={isModalShow}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                <View style={Style.modalBox}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={Style.modalTitle}>Comments</Text>
                        <FontAwesome style={Style.iconClose} name='close' onPress={() => { setisModalShow(false) }} />
                    </View>
                    <ScrollView>
                        {
                            comt.map((item) => <View style={Style.cmtBox} key={item.id}>
                                <View style={Style.cmtUserIf}>
                                    <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: item.profile.img }} /></View>
                                    <Text style={Style.cmtName}>{item.profile.fullname}</Text>
                                </View>
                                <Text style={Style.cmtCnt}>{item.cmt}</Text>
                            </View>)
                        }
                    </ScrollView>

                    <View style={Style.addCmt}>
                        <TextInput
                            style={Style.ipCmt}
                            placeholder='Enter your comment!'
                            value={comment}
                            onChangeText={(text) => { setcomment(text) }}
                        />
                        <FontAwesome style={Style.sendCmt} name='send-o' onPress={() => {
                            addNewCmt();
                        }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default NewItems