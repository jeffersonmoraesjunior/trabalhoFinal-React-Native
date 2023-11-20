import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   login: {
      flex: 1,
      backgroundColor: '#F2C84B',
      alignItems: 'center',
      paddingTop: 50,
      justifyContent: 'center'
   },
   logo: {
      width: '100%',
      height: 250,
      resizeMode: 'contain',
      marginBottom: 10
   },
   titulo: {
      color: 'white',
      fontSize: 23,
      fontWeight: 'bold'
   },
   label: {
      color: 'black',
      fontSize: 15,
      fontWeight: '500'
   },
   input: {
      backgroundColor: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      borderRadius: 20,
      marginBottom: 12,
      color: '#DCDCDC',
      width: '100%',
      paddingHorizontal: 150
   },
   cadastrar: {
      backgroundColor: '#FFF',
      fontSize: 18,
      borderRadius: 20,
      marginBottom: 15,
      color: '#DCDCDC',
      width: '100%',
      padding: Platform.OS === 'ios' ? 15 : 10,
      paddingHorizontal: 110
   }
});
