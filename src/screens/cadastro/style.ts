import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   login: {
      flex: 1,
      backgroundColor: '#F2C84B',
      alignItems: 'center',
      paddingTop: 50,
      justifyContent: 'center'
   },

   form: {
      alignItems: 'center',
      width: '75%',
   
   },

   logo: {
      width: '100%',
      height: 250,
      resizeMode: 'contain',
      marginTop: '-10%'
      //marginBottom: 10
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
      borderRadius: 18,
      marginBottom: 12,
      color: 'black',
      width: '100%',
      
   
   }
});
