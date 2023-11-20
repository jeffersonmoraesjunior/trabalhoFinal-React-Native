import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    login: {
        backgroundColor: "#f2c84b",
        height: "100%",
        alignItems: 'center',
        gap: 20,
        justifyContent: 'center'
    },
    logo: {
        width: '75%',
        height: '20%'
        
    },
    titulo: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    label:{
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    input:{
        backgroundColor: '#FFF',
        color: 'black',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
       
        borderRadius: 7,
        width: 270
    }
})