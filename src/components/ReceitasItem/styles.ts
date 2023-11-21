import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   card: {
      backgroundColor: '#fff',
      marginBottom: 20,
      marginLeft: '2%',
      width: '96%',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
         width: 3,
         height: 3
      },
      borderColor: "#F2780C",
      borderWidth: 10,
      borderRadius: 10
   },
   cardContent: {
      padding: 10
   },
   image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover'
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold'
   }

});
