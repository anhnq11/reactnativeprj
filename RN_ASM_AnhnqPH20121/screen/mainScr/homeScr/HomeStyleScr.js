import { StyleSheet } from "react-native";

export default StyleSheet.create({
    addBtnBox:{
        width: 55,
        height: 55,
        backgroundColor: '#30CF59',
        position: 'absolute',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300,
    },
    addBtn:{
        color: 'white',
        fontSize: 40,
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
    },
    modalTitle:{
        fontSize: 25,
        fontWeight: '600',
        color: '#30CF59'
    },
    inputBox:{
        width: 300,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#30CF59',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
    },
    inputText:{
        color: 'black',
        fontWeight: '600',
        fontSize: 18,
    },
    modalImgBox:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, 
    },
    btnAddImg:{
        width: 250,
        height: 50,
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'dashed',
        paddingHorizontal: 25
    },
    btnAddImgText:{
        fontSize: 20,
        fontWeight: '500'
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