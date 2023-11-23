import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
   },
   view1: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
   },
   title: {
      fontSize: 24,
      color: 'red',
      fontWeight: 'bold',
      marginTop: 30,
      textAlign: 'center'
   },
   input: {
      height: 40,
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 8
   },
   imagemChefe: {
      width: 1000,
      height: 250,
      marginTop: '-34%',
      resizeMode: 'contain',
      marginRight: '-35%'
   }
});
