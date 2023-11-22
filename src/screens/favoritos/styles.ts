// styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
   },
   title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
   },
   image: {
      width: '100%',
      height: 200
   },
   itemContainer: {
      flex: 1,
      margin: 10,
      justifyContent: 'space-between',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingBottom: 10
   },
   itemTitle: {
      fontSize: 18,
      marginBottom: 5
   },
   removeButton: {
      alignSelf: 'flex-end',
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 5
   },
   removeButtonText: {
      color: 'white'
   }
});
