import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { getReceitaItemDetails } from '../../services/api/apiReceitas';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FavoritoContext } from '../../context/favoritoContext';

export const ReceitaDetalhes = ({ route }) => {
   const navigation = useNavigation<NavigationProp<any>>();
   const { id } = route.params;
   const [isLoading, setIsLoading] = useState(true);
   const [receita, setReceita] = useState(null);

   const { addReceitaItemToFavoritos } = useContext(FavoritoContext);

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

   return (
      <View style={styles.container}>
         <Image source={{ uri: receita.image }} style={styles.image} />
         <ScrollView style={styles.infoContainer}>
            <View style={styles.infoViewContainer}>
               <Text style={styles.title}>{receita.title}</Text>
               <Text style={styles.information}>{receita.instructions}</Text>
               <TouchableOpacity
                  style={styles.favoritoButton}
                  onPress={() => addReceitaItemToFavoritos(receita)}>
                  <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </View>
   );
};
