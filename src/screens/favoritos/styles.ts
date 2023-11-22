// styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      padding: 16
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16
   },
   itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#f0f0f0'
   },
   itemTitle: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold'
   },
   itemImage: {
      width: 50,
      height: 50,
      borderRadius: 25
   },
   removeButton: {
      marginTop: 8,
      padding: 8,
      backgroundColor: '#ff1900',
      alignItems: 'center'
   },
   removeButtonText: {
      color: '#ffffff',
      fontSize: 16
   }
});
