import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        justifyContent: 'center',
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 3,
        borderRadius: 10
    },
    userInfo:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImgBox:{
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    userImg:{
        width: '100%',
        height: '100%',
        borderRadius: 45,
    },
    userNameBox:{
        width: '50%',
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
        width: 100,
        height: 30,
        backgroundColor: '#30CF59',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
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
    deleteIcon:{
        fontSize: 25,
        marginLeft: 70
    }
})