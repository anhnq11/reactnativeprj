import { StyleSheet } from "react-native";  

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 35,
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
        marginTop: 45,
    },
    textDes:{
        width: '70%',
        fontSize: 18,
        color: '#8B8B8B',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
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
    textBox2:{
        width: '90%',
    },
    forgotPass:{
        fontSize: 18,
        color: '#30CF59',
        fontWeight: '400',
        marginTop: 10,
        textDecorationLine: 'underline'
    },
    btnSignIn:{
        width: '90%',
        backgroundColor: '#30CF59',
        borderRadius: 10,
        marginTop: 50
    },
    textSignIn:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '500',
        paddingVertical: 10
    },
    textBox3:{
        width: '90%',
        alignItems: 'center',
        marginVertical: 15,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    orWith:{
        color: '#8B8B8B',
        fontSize: 18,
        fontWeight: '500'
    },
    loginBox:{
        width: '90%',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    loginImgBox:{
        width: 25,
        height: 25,
    },
    loginImg:{
        width: '100%',
        height: '100%'
    },
    loginLabel:{
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 5,
    },
    textBox4:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
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