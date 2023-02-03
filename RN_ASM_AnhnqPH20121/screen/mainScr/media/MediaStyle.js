import { StyleSheet } from "react-native";
export default StyleSheet.create({
    listBH:{
        width: '100%',
        height: '93%',
        paddingHorizontal: 10,
    },
    playNow:{
        width: '100%',
        height: '7%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#ccc'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonBox:{
        width: 40,
        height: 40,        
    },
    mediaBtn:{
        fontSize: 40,
        color: '#30CF59'
    },
    songInfor:{
        marginLeft: 10,
        width: '60%',
        height: '100%',
    },
    songName:{
        fontSize: 18,
        fontWeight: '500',
    },
    songAuthor:{
        fontSize: 15,
        marginTop: -3
    }
})