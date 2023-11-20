import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F2C84B',
      paddingTop: 50
   },

   form: {
      paddingHorizontal: 20,
      width: 400
   },

   logo: {
      width: '100%',
      height: 250,
      resizeMode: 'contain',
      marginTop: '20%'
      //marginBottom: 5,
   },

   input: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      marginBottom: 12,
      color: '#DCDCDC',
      fontSize: 16,
      width: '100%'
   },

   helpText: {
      color: '#F2421B',
      textAlign: 'right',
      marginBottom: 25,
      fontSize: 15,
      fontWeight: '500'
   },

   loginButton: {
      backgroundColor: '#F79249',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      marginBottom: 15
   },

   registerButton: {
      backgroundColor: 'transparent',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#F79249',
      padding: 15,
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 5
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
