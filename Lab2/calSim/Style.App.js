import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    appName:{
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        marginVertical: 10
    },
    mainContent:{
        width: '95%',
        height: '95%',
        borderColor: '#cccccc',
        borderRadius: 15,
        padding: 10,

    },
    textResult:{
        width: '100%',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 10,
        
    }
});