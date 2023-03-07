import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    ScrollView,
    TextInput,
    Dimensions,
    ToastAndroid,
    TouchableWithoutFeedback
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Style from './NewItemsStyle'
import URL from '../../../../UrlAPi'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const NewItems = (props) => {

    const [isModalShow, setisModalShow] = useState(false)
    const [comt, setcomt] = useState([])
    const [comment, setcomment] = useState('')
    const [cmtCount, setcmtCount] = useState(0)
    const [isLike, setisLike] = useState(false)
    const [likes, setlikes] = useState([])
    const [likeId, setlikeId] = useState()
    const [curLike, setcurLike] = useState()
    const [likeCount, setlikeCount] = useState(0)
    const [isLoading, setisLoading] = useState(false)
    const [action, setaction] = useState('')

    // Fetch Likes post 
    const getLikes = async () => {
        let url = URL + '/likes?postId=' + props.inputData.id
        try {
            const response = await fetch(url);
            const json = await response.json();
            setlikes(json)
            setlikeCount(likes.length)
            getIsLike()
        } catch (error) {
            console.error(error);
        }
    }

    // Fetch Comments bài viết - server
    const getCmts = async () => {
        let url = URL + '/cmts?postId=' + props.inputData.id + '&_expand=profile'
        try {
            const response = await fetch(url);
            const json = await response.json();
            setcomt(json);
            setcmtCount(json.length)
        } catch (error) {
            console.error(error);
        }
    }

    const getIsLike = () => {
        likes.forEach(element => {
            if (element.profileId == props.userInfo.id) {
                setisLike(true)
                setlikeId(element.id)
            }
            if(element.id == curLike){
                setisLike(false)
            }
        });
    }

    // Add Like
    const addLike = (postId, profileId) => {
        let like = {
            postId: postId,
            profileId: profileId,
        }

        let urlPost = URL + '/likes'
        fetch(urlPost, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(like)
        })
            .then((res) => {
                if (res.status == 201) {
                    console.log("Đã Like");
                    loadData();
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

    // UnLike
    const unLike = (likeId) => {
        let url = URL + '/likes/' + likeId
        fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                if (res.status == 200) {
                    console.log('Hủy Like');
                    loadData();
                }
                else {
                    console.log(res.status);
                }
            })
            .catch((ex) => {
                console.log(ex);
            });
    }

    const addNewCmt = () => {

        if (comment !== '') {
            let newCmt = {
                postId: props.inputData.id,
                profileId: props.userInfo.id,
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
        } else {
            ToastAndroid.showWithGravity(
                'Enter your comment!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    }

    React.useEffect(() => {
        const focusHandler = props.navigation.addListener('focus', () => {
            // loadData();
        });
        loadData();
        return focusHandler;
    }, [props.navigation]);

    // Loadata
    const loadData = React.useCallback(() => {
        setisLoading(true);
        getCmts();
        getLikes();
        console.log(likes); // Chạy lượt đầu không log ra dữ liệu
        setisLoading(false);
    }, []);

    return (
        <View style={Style.container}>
            {/* User Info */}
            <TouchableWithoutFeedback onPress={() => {
                console.log("User Info Click!!!");
                setaction('SHOW_ACC')
                setisModalShow(true)
            }}>
                <View style={Style.userInfo} >
                    <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: props.inputData.profile.img }} /></View>
                    <View style={Style.userNameBox}>
                        <Text style={Style.userName}>{props.inputData.profile.fullname}</Text>
                        <View style={Style.DesBox}><Text style={Style.userDes}>@{props.inputData.profile.name}</Text></View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* Content: Post Content & Image */}
            <View>
                {
                    props.inputData.content !== undefined ? <Text style={Style.contentText}>{props.inputData.content}</Text> : null
                }
                {
                    props.inputData.img != "" ? <TouchableWithoutFeedback onPress={() => {
                        setaction('SHOW_IMG') // Hành động xem ảnh ở chế độ full màn hình
                        setisModalShow(true)
                    }}>
                        <View style={{ width: deviceWidth - 20, height: 200, justifyContent: 'center', marginTop: 5 }}>
                            <Image style={{ width: deviceWidth - 20, height: 200 }} source={{ uri: props.inputData.img }} />
                        </View>
                    </TouchableWithoutFeedback> : <View></View>
                }
            </View>

            {/* React Icon */}
            <View style={Style.mReactBox}>
                <TouchableOpacity style={Style.reactBox} onPress={() => {
                    loadData()
                }}>
                    <View style={Style.iconBox}>
                        {
                            isLike ? <TouchableWithoutFeedback onPress={() => {
                                unLike(likeId)
                                setisLike(false)
                                setcurLike(likeId)
                                }}>
                                <FontAwesome name='heart' style={[Style.reactIcon, { color: 'red' }]} />
                            </TouchableWithoutFeedback> :
                                <TouchableWithoutFeedback onPress={() => { 
                                    addLike(props.inputData.id, props.userInfo.id)
                                    setisLike(true)
                                    }}>
                                        <FontAwesome name='heart-o' style={Style.reactIcon} />
                                </TouchableWithoutFeedback>
                        }
                    </View>
                    <Text style={Style.reactText}>{likeCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.reactBox} onPress={() => {
                    setaction('SHOW_CMT') // Hành động xem comment bài viết
                    setisModalShow(true)
                    getCmts();
                }}>
                    <View style={Style.iconBox}><FontAwesome name='comment-o' style={Style.reactIcon} /></View>
                    <Text style={Style.reactText}>{cmtCount}</Text>
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
                    setaction('')
                    setisModalShow(false)
                }}>
                {
                    action === 'SHOW_CMT' ?
                        // Modal show comments
                        <View style={Style.modalBox}>
                            {/* User Info */}
                            <View style={Style.modalHeader}>
                                <View style={Style.userInfo}>
                                    <View style={Style.userImgBox}><Image style={Style.userImg} source={{ uri: props.inputData.profile.img }} /></View>
                                    <View style={Style.userNameBox}>
                                        <Text style={Style.userName}>{props.inputData.profile.fullname}</Text>
                                        <View style={Style.DesBox}><Text style={Style.userDes}>@{props.inputData.profile.name}</Text></View>
                                    </View>
                                </View>
                                <FontAwesome style={Style.iconClose} name='close' onPress={() => { setisModalShow(false) }} />
                            </View>
                            {/* Content: Post Content & Image */}
                            <View>
                                {
                                    props.inputData.content != "" ? <Text style={Style.contentText}>{props.inputData.content}</Text> : <View></View>
                                }
                                {
                                    props.inputData.img != "" ? <View style={Style.contentImgBox}><Image style={Style.contentImg} source={{ uri: props.inputData.img }} /></View> : <View></View>
                                }
                            </View>
                            <ScrollView style={Style.listCmt}>
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
                        </View> : action === 'SHOW_IMG' ?
                            // Modal show Image
                            <View style={Style.modalImgBox}>
                                <Image style={{ width: deviceWidth, height: deviceHeight / 3 }} source={{ uri: props.inputData.img }} />
                            </View> : action === 'SHOW_ACC' ?
                                <View style={{ width: deviceWidth, height: deviceHeight, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>Đây là profile của {props.inputData.profile.fullname}</Text>
                                </View> : <View></View>
                }
            </Modal>
        </View>
    )
}

export default NewItems