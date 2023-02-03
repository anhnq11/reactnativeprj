import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 10,        
    },
    imgBox:{
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 10,
        borderColor: '#30CF59'
    },
    songIcon:{
        fontSize: 35,
        color: '#30CF59'
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