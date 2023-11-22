// index.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FavoritoContext } from '../../context/favoritoContext';
import styles from './styles';

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
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                  <TouchableOpacity
                     style={styles.removeButton}
                     onPress={() => removeReceitaItemFromFavoritos(item.id)}>
                     <Text style={styles.removeButtonText}>Remover</Text>
                  </TouchableOpacity>
               </View>
            )}
         />
      </View>
   );
}
