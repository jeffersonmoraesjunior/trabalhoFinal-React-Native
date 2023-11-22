import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ReceitaItem, ReceitasItemListProps } from '../../components/receitasItem';
import { getReceitaItemList } from '../../services/api/apiReceitas';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../../services/firebase/firebase.config';
import { signOut } from 'firebase/auth';

import { useNavigation, NavigationProp } from '@react-navigation/native';

export const Receitas = ({ navigation }) => {
   const [receitaItemList, setReceitaItemList] = useState<ReceitasItemListProps[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const currentUser = auth.currentUser;
   if (currentUser != null) {
   } else {
      alert('É necessário estar logado para utilizar o aplicativo');
      navigation.goBack();
   }
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

   function logout() {
      signOut(auth).then(() => {
         alert('Até a próxima!');
         navigation.navigate(' ');
      });
   }

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />

         <View style={ styles.view1}>
            <Image source={require('../../assets/CHEF.png')} style={styles.imagemChefe} />
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
