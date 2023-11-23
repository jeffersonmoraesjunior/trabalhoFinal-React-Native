import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
   },
   title: {
      color: 'red',
      fontSize: 24,
      fontWeight: 'bold',
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
   },
   emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40
   },
   emptyText: {
      fontSize: 24,
      textAlign: 'center',
      color: '#888'
   },
   imageChef: {
      width: 100,
      height: 100
   }
});
