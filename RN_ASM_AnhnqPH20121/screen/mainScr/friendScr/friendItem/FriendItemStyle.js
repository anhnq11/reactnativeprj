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
        width: '55%',
        marginLeft: 5,
    },
    userName:{
        fontSize: 19,
        color: '#30CF59',
        fontWeight: '500',
    },
    DesBox:{
        flexDirection: 'row',
    },
    userDes:{
        color: '#696C87',
        marginRight: 10,
        fontSize: 15,
        color: 'black',

    },
    followBtn:{
        width: '26%',
        height: 30,
        backgroundColor: '#30CF59',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5
    },
    followText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    followImgBox:{
        marginLeft: 3,
    },
    followImg:{
        fontSize: 25,
        color: 'white'
    },
})