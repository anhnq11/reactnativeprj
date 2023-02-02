import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    calScreen:{
        width: '100%',
        height: 250,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
    },
    textOnScr:{
        fontSize: 50,
        width: '100%',
        height: '70%',
    },
    Result:{
        fontSize: 50,
        width: '100%',
        height: 60,
        textAlign: 'right',
        marginTop: 4,
    },
    keyBoard:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },  
    rowKeyBoard:{
        flexDirection: 'row',
        marginBottom: 10
    },
    calButton:{
        width: 65,
        height: 65,
        backgroundColor: '#A5A5A5',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    calButton2:{
        width: 65,
        height: 65,
        backgroundColor: '#FD9800',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    calButton3:{
        width: 65,
        height: 65,
        backgroundColor: '#4e5057',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer:{
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    Button:{
        width: '23%',
        marginHorizontal: '1%',
        backgroundColor: '#ccc',
        borderRadius: 10,
    },
    Button2:{
        width: '48%',
        marginHorizontal: '1%',
        backgroundColor: '#ccc',
        borderRadius: 10,
    },
    Button3:{
        width: '30%',
        marginHorizontal: '2%',
        backgroundColor: '#155a7b',
        borderRadius: 10,
    },
})