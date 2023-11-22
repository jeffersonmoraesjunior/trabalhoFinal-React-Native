import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#F2C84B',

      width: '100%'
   },

   form: {
    
      width: '100%'
   },

   logo: {
      width: '100%',
      height: 250,
      resizeMode: 'contain',
      marginTop: '-10%'
      //marginBottom: 5,
   },

   input: {
      backgroundColor: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      borderRadius: 18,
      marginBottom: 12,
      color: 'black',
      width: '80%',
      alignSelf: 'center'
   
   },

   helpText: {
      color: '#F2421B',
      textAlign: 'right',
      marginBottom: 25,
      fontSize: 15,
      fontWeight: '500',
      width: '90%',
   },

   loginButton: {
      backgroundColor: '#F79249',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      marginBottom: 15,
      width: '80%',
      alignSelf: 'center'
   },

   registerButton: {
      backgroundColor: 'transparent',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#F79249',
      padding: 15,
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 5,
      width: '80%',
      alignSelf: 'center'
   },

   loginText: {
      color: 'white',
      fontWeight: '900',
      fontSize: 20
   },

   registerText: {
      color: '#F2421B',
      fontWeight: '600',
      fontSize: 15
   },

   wave: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },

   buttonEntrar: {
      justifyContent: 'center',
      alignItems: 'center'
   }
});
