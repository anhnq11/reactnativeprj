import { StyleSheet } from "react-native";

export default StyleSheet.create({
    addBtnBox:{
        width: 55,
        height: 55,
        backgroundColor: '#30CF59',
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300,
    },
    addBtn:{
        color: 'white',
        fontSize: 40,
    },
    titleAlert:{
        color: 'black',
        fontWeight: '500',
        fontSize: 22
    },
    btnBgr:{
        backgroundColor: '#30CF59',
        width: 80,
        height: 40
    },
    btnText:{
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    inputText:{
        width: 260,
        color: 'black',
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: '#ccc',
        borderRadius: 10,
    },
    addImgBox:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addImgIcon:{
        fontSize: 20,
    },
    addImg:{
        fontSize: 16,
        marginLeft: 10
    }
})