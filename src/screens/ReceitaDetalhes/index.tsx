import React, { useContext, useEffect, useState } from 'react';
import {
   View,
   Text,
   Image,
   ActivityIndicator,
   ScrollView,
   TouchableOpacity,
   Alert
} from 'react-native';
import { styles } from './styles';
import { getReceitaItemDetails } from '../../services/api/apiReceitas';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FavoritoContext } from '../../context/favoritoContext';

export const ReceitaDetalhes = ({ route }) => {
   const navigation = useNavigation<NavigationProp<any>>();
   const { id } = route.params;
   const [isLoading, setIsLoading] = useState(true);
   const [receita, setReceita] = useState(null);

   const { addReceitaItemToFavoritos, removeReceitaItemFromFavoritos, receitaItemList } =
      useContext(FavoritoContext);

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

   const isFavorito = receitaItemList.some((item) => item.id === receita.id);

   return (
      <View style={styles.container}>
         <Image source={{ uri: receita.image }} style={styles.image} />
         <ScrollView style={styles.infoContainer}>
            <View style={styles.infoViewContainer}>
               <Text style={styles.title}>{receita.title}</Text>
               <Text style={styles.information}>{receita.instructions}</Text>
               <TouchableOpacity
                  style={styles.favoritoButton}
                  onPress={() => {
                     if (isFavorito) {
                        removeReceitaItemFromFavoritos(receita.id);
                        Alert.alert(
                           'Removido dos Favoritos',
                           'Receita foi removida dos favoritos',
                           [{ text: 'OK' }]
                        );
                     } else {
                        addReceitaItemToFavoritos(receita);
                        Alert.alert(
                           'Adicionado aos Favoritos',
                           'Receita foi adicionada aos favoritos',
                           [{ text: 'OK' }]
                        );
                     }
                  }}>
                  <Text style={styles.buttonText}>
                     {isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  </Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </View>
   );
};
