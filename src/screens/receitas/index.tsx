import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ReceitaItem, ReceitasItemListProps } from '../../components/ReceitasItem';
import { getReceitaItemList } from '../../services/Api/apiReceitas';
import { StatusBar } from 'expo-status-bar';

export const Receitas = ({ navigation }) => {
   const [receitaItemList, setReceitaItemList] = useState<ReceitasItemListProps[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   //cada pagina recarregada no mobile chama o useEffect
   useEffect(() => {
      listReceitaItemList();
   }, []);

   //estrutura de chamada da api
   function listReceitaItemList() {
      getReceitaItemList()
         .then((response) => {
            setReceitaItemList(response.data.results);
         })
         .catch((error) => {
            console.log(error.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />

         <View style={styles.view1}>
            <Image source={require('../../assets/logo.png')} style={styles.imagemChefe} />
            <Text style={styles.title}>Livro de Receitas</Text>
         </View>

         {isLoading ? (
            <ActivityIndicator size={'large'} color={'#ff0000'} />
         ) : (
            <FlatList
               data={receitaItemList}
               renderItem={({ item }) => {
                  return (
                     <TouchableOpacity
                        onPress={() => {
                           navigation.navigate('ReceitaDetalhes', { id: item.id });
                        }}>
                        <ReceitaItem item={item} />
                     </TouchableOpacity>
                  );
               }}
            />
         )}
      </View>
   );
};
