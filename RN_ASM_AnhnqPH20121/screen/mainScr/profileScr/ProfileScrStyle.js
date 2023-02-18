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
    },
    modalBox:{
        width: '90%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginTop: '30%',
        borderWidth: 4,
        borderColor: '#30CF59'
    },
    inputBox:{
        width: 300,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#30CF59',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
    },
    inputText:{
        color: 'black',
        fontWeight: '600',
        fontSize: 18,
    },
    modalImgBox:{
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15, 
    },
    modalImg:{
        width: '100%',
        height: '100%',
        borderRadius: 150,
        backgroundColor: 'red'
    },
    modalBtnBox:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,

    },
    modalBtn:{
        width: '45%',
        backgroundColor: '#30CF59',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalBtnText:{
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        paddingVertical: 3,
    }
})