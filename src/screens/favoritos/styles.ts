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
      borderColor: '#ccc',
      borderWidth: 1,
      paddingBottom: 10,
   },
   itemTitle: {
      fontSize: 18,
      marginTop: 5,
      marginLeft: 7,
      marginBottom: 5
   },
   removeButton: {
      alignSelf: 'flex-end',
      marginRight: 5,
      padding: 10,
      backgroundColor: '#ff0000',
      borderRadius: 7
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
