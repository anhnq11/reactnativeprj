import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    backBtnBox:{
        width: 40,
        height: 40,
        backgroundColor: '#30CF59',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 20
    },
    backBtn:{
        color: 'white',
        fontSize: 25
    },
    textBox:{
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    textIntro:{
        width: '90%',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 15,
    },
    textDes:{
        width: '70%',
        fontSize: 18,
        color: '#8B8B8B',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    inputBox:{
        width: '90%',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#30CF59',
        padding: 10,
        marginTop: 20
    },
    inputLabel:{
        fontSize: 18,
        color: '#30CF59',
        fontWeight: '500',
    },
    inputText:{
        color: 'black',
        fontWeight: '600',
        fontSize: 18,
    },
    btnSignIn:{
        width: '90%',
        backgroundColor: '#30CF59',
        borderRadius: 10,
        marginTop: 30
    },
    textSignIn:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '500',
        paddingVertical: 10
    },
    textBox4:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    dontAcc:{
        fontSize: 16,
    },
    signUp:{
        fontSize: 16,
        color: '#30CF59',
        marginLeft: 3,
        textDecorationLine: 'underline'
    }
})