import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export interface ReceitasItemListProps {
   id: string;
   title: string;
   image: string;
}

export interface ReceitaItemProps {
   item: ReceitasItemListProps;
}

export const ReceitaItem = ({ item }: ReceitaItemProps) => {
   return (
      <View style={styles.card}>
         <Image source={{ uri: item.image }} style={styles.image} />
         <View style={styles.cardContent}>
            <Text style={styles.title}>{item.title}</Text>
         </View>
      </View>
   );
};
