import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { getReceitaItemDetails } from '../../services/Api/apiReceitas';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase/firebase.config';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export const ReceitaDetalhes = ({ route }) => {
   const navigation = useNavigation<NavigationProp<any>>();
   const { id } = route.params;
   const [isLoading, setIsLoading] = useState(true);
   const [receita, setReceita] = useState(null);

   useEffect(() => {
      getReceitaItemDetails(id)
         .then((response) => {
            setReceita(response.data);
            setIsLoading(false);
         })
         .catch((error) => {
            console.error(error);
         });
   }, [id]);

   if (isLoading) {
      return <ActivityIndicator size="large" color="#ff1900" />;
   }

   function logout() {
      signOut(auth).then(() => {
         alert('Até a próxima!');
         navigation.navigate(' ');
      });
   }

   return (
      <View style={styles.container}>
         <View>
            <TouchableOpacity onPress={logout}>
               <Text>Sair</Text>
            </TouchableOpacity>
         </View>
         <Image source={{ uri: receita.image }} style={styles.image} />
         <ScrollView style={styles.infoContainer}>
            <View style={styles.infoViewContainer}>
               <Text style={styles.title}>{receita.title}</Text>
               <Text style={styles.information}>{receita.instructions}</Text>
               <Text style={styles.price}>Price per serving: {receita.pricePerServing}</Text>
            </View>
         </ScrollView>
      </View>
   );
};
