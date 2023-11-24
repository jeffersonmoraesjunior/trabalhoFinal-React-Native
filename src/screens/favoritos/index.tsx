import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { FavoritoContext } from '../../context/favoritoContext';
import styles from './styles';
import { ReceitaItem, ReceitasItemListProps } from '../../components/receitasItem';
import { getReceitaItemList } from '../../services/api/apiReceitas';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export function Favoritos() {
   const [receitaItem, setReceitaItem] = useState<ReceitasItemListProps[]>([]);
   const { receitaItemList, removeReceitaItemFromFavoritos } = useContext(FavoritoContext);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const navigation = useNavigation<NavigationProp<any>>();

   //cada pagina recarregada no mobile chama o useEffect
   useEffect(() => {
      listReceitaItemList();
   }, []);

   //estrutura de chamada da api
   function listReceitaItemList() {
      getReceitaItemList()
         .then((response) => {
            setReceitaItem(response.data.results);
         })
         .catch((error) => {
            console.log(error.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   if (receitaItemList.length === 0) {
      return (
         <View style={styles.container}>
            {/* <Text style={styles.title}>Favoritos</Text> */}
            <View style={styles.emptyContainer}>
               <Image source={require('../../assets/chefe.png')} style={styles.imageChef} />
               <Text style={styles.emptyText}>Não há receitas adicionadas aos favoritos</Text>
            </View>
         </View>
      );
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Favoritos</Text>
         <FlatList
            data={receitaItemList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
               return (
                  <View style={styles.itemContainer}>
                     <Pressable
                        onPress={() => {
                           navigation.navigate('ReceitaDetalhes', { id: item.id });
                        }}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <TouchableOpacity
                           style={styles.removeButton}
                           onPress={() => removeReceitaItemFromFavoritos(item.id)}>
                           <Text style={styles.removeButtonText}>Remover Favoritos</Text>
                        </TouchableOpacity>
                     </Pressable>
                  </View>
               );
            }}
         />
      </View>
   );
}
