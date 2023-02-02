import { StyleSheet } from "react-native";  

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    imgIntroBox:{
        width: '100%',
        height: '60%',
        backgroundColor: 'red',
        marginBottom: 5,
    },
    imgIntro:{
        width: '100%',
        height: '100%',
    },
    textBox:{
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        marginBottom: 15,
    },
    textIntro:{
        width: '90%',
        fontSize: 45,
        textAlign: 'center',
    },
    textDes:{
        width: '70%',
        fontSize: 23,
        textAlign: 'center',
    },
    dotl:{
        width: 50,
        height: 8,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    dots:{
        width: 8,
        height: 8,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginLeft: 3
    },
    btnGetStarted:{
        width: '90%',
        backgroundColor: '#30CF59',
        borderRadius: 10,
        marginTop: 5
    },
    textGetStarted:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '500',
        paddingVertical: 10
    }
})