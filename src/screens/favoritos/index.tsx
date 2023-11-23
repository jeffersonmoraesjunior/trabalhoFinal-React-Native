import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FavoritoContext } from '../../context/favoritoContext';
import styles from './styles';
import { ReceitaItem } from '../../components/receitasItem';

export function Favoritos() {
   const { receitaItemList, removeReceitaItemFromFavoritos } = useContext(FavoritoContext);

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
            renderItem={({ item }) => (
               <View style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <TouchableOpacity
                     style={styles.removeButton}
                     onPress={() => removeReceitaItemFromFavoritos(item.id)}>
                     <Text style={styles.removeButtonText}>Remover Favoritos</Text>
                  </TouchableOpacity>
               </View>
            )}
         />
      </View>
   );
}
