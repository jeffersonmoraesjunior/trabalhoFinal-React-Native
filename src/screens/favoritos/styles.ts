import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#f2d541',
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
      fontWeight: 'bold',
      marginBottom: 15
   },
   input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 8
   },
   imagemChefe: {
      width: 150,
      height: 60,
      marginTop: '10%',
      resizeMode: 'contain'
   }
});
