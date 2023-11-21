import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   },
   image: {
      width: '100%',
      height: 200
   },
   infoContainer: {
      padding: 20,
      backgroundColor: '#fff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      marginTop: -20
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10
   },
   information: {
      fontSize: 16,
      color: '#333'
   },
   price: {
      fontSize: 18,
      color: '#666',
      marginTop: 10
   },
   infoViewContainer: {
      marginBottom: 50
   }
});
