// styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      padding: 35,
      width: '100%'
   },
   logo: {
      width: '100%',
      height: 250,
      resizeMode: 'contain',  
      marginTop: '-40%'
   },
   input: {
      backgroundColor: 'transparent',
      height: 55,
      borderRadius: 20,
      borderColor: '#F79249',
      borderWidth: 2,
      marginBottom: 16,
      paddingLeft: 8,
      color: 'black',
      width: '100%',
      fontSize: 17,
   },
});
