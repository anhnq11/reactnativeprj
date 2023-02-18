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
        width: '100%',
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
    userTime:{
        color: '#61605f',
        marginLeft: 5,
        marginTop: -5
    },
    followBox:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    followImg:{
        fontSize: 25,
    },
    contentText:{
        fontSize: 16,
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
        justifyContent: 'center',
        flexDirection: 'row',
    },
    reactBox:{
        width: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reactIcon:{
        fontSize: 22,
        marginRight: 5,
    },
    reactText:{
        fontSize: 17,
    },
    modalBox:{
        width: '90%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginVertical: '15%',
        borderWidth: 4,
        borderColor: '#30CF59'
    },
    modalTitle:{
        width: '80%',
        fontSize: 30,
        fontWeight: '500',
        marginLeft: 10,
        textAlign: 'center',
        marginLeft: '10%',
    },
    iconClose:{
        color: '#30CF59',
        fontSize: 30,
        textAlign: 'right'
    },
    cmtBox:{
        width: 320,
        borderBottomWidth: 1,
        borderBottomColor: '#30CF59',
        marginBottom: 5,
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
        color: '#30CF59',
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
        backgroundColor: '#30CF59',
        width: 320,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    ipCmt:{
        borderColor: 'white',
        borderWidth: 1,
        width: '85%',
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        margin: 3,
        fontSize: 18,
        
    },
    sendCmt:{
        fontSize: 23,
        color: 'white',
        marginLeft: 5
    }
})