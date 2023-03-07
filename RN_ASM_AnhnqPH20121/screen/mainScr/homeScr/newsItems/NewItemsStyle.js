import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginTop: 10,
        padding: 3,
    },
    userInfo:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImgBox:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    userImg:{
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    userNameBox:{
        width: '70%',
        marginLeft: 5,
    },
    userName:{
        fontSize: 19,
        color: 'black',
        fontWeight: '500',
    },
    userDes:{
        marginTop: -5,
        color: '#696C87',
        marginRight: 10,
        fontSize: 15,
        color: 'black',
    },
    userTime:{
        color: '#61605f',
        marginLeft: 5,
        marginTop: -5
    },
    contentText:{
        fontSize: 16,
        marginTop: 5,
    },
    contentImgBox:{
        width: '100%',
        height: 200,
        marginTop: 5,
    },
    contentImg:{
        width: '100%',
        height: '100%',
    },
    mReactBox:{
        width: '100%',
        height: 30,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    reactBox:{
        width: '33%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    reactIcon:{
        fontSize: 22,
        marginRight: 5,
    },
    reactText:{
        fontSize: 17,
    },
    modalBox:{
        maxHeight: '95%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
    modalImgBox:{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    modalHeader:{
        width: '100%',
        flexDirection: 'row',
    },
    iconClose:{
        color: 'black',
        fontSize: 30,
        textAlign: 'right'
    },
    listCmt:{
        marginVertical: 10
    },
    cmtBox:{
        width: '100%',
        marginBottom: 7,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10
    },
    cmtUserIf:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImgBox:{
        width: 35,
        height: 35,
    },
    cmtName:{
        color: 'black',
        fontWeight: '500',
        marginLeft: 5,
        fontSize: 18
    },
    cmtCnt:{
        fontSize: 18,
        paddingHorizontal: 5
    },
    addCmt:{
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center'
    },
    ipCmt:{
        width: '85%',
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,        
        fontSize: 18,
        
    },
    sendCmt:{
        width: '15%',
        fontSize: 23,
        color: 'black',
        textAlign: 'center',
        paddingRight: 5
    }
})