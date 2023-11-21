import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './styles';
import { getReceitaItemDetails } from '../../services/Api/apiReceitas';

export const ReceitaDetalhes = ({ route }) => {
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

   return (
      <View style={styles.container}>
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
