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
        fontSize: 40,
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
        color: '#696C87',
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
    }

})