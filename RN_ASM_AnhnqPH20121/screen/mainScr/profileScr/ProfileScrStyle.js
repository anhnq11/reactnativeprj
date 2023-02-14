import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
    },
    imgIntroBox:{
        width: '100%',
        height: 200,
        marginBottom: 5,
    },
    imgIntro:{
        width: '100%',
        height: '100%',
    },
    userInfoBox:{
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        marginTop: '42%',
        flexDirection: 'row',
    },
    userImgBox:{
        width: 100,
        height: 100,
    },
    userImg:{
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    userName:{
        fontSize: 30,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 35,
    },
    flInfo:{
        marginTop: 45,
        marginLeft: 20,
        flexDirection: 'row',
    },
    postText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#61605f',
        paddingRight: 20,
    },
    flText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#61605f',
        paddingLeft: 20,
        borderLeftWidth: 2,
        borderColor: '#61605f'
    },
    btnContainer:{
        width: '90%',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        paddingBottom: 10,
        borderBottomColor: '#61605f'
    },
    btnBoxL:{
        width: '40%',
        backgroundColor: '#30CF59',
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
    },
    btnBoxR:{
        width: '40%',
        backgroundColor: '#30CF59',
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        marginLeft: 10,
    },
    btnIcon:{
        fontSize: 22,
        color: 'white'
    },
    btnText:{
        fontSize: 17,
        color: 'white',
        marginLeft: 10
    }
})