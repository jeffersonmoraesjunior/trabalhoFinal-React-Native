import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FavoritoContext } from '../../context/favoritoContext';
import styles from './styles';
import { ReceitaItem } from '../../components/receitasItem';

export function FavoritosScreen() {
   const { receitaItemList, removeReceitaItemFromFavoritos } = useContext(FavoritoContext);

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
