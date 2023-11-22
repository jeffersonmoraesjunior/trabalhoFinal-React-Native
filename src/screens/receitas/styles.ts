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
      justifyContent: 'center',
      //alignSelf: 'flex-end',
   },
   title: {
      fontSize: 24,
      color: 'red',
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: '-15%',
   },
   input: {
      height: 40,
      //borderColor: 'gray',
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
      //alignSelf: 'flex-end',
      //marginRight: '5%',
      //paddingHorizontal: '20%'
       
   }
});
