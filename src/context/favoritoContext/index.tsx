import React, { createContext, useState, useEffect } from 'react';
import {  ReceitasItemListProps } from '../../components/receitasItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextProps {
   children: React.ReactNode;
}

export interface ReceitaContextProvider {
   receitaItemList: ReceitasItemListProps[];
   addReceitaItemToFavoritos: (receitaItem: ReceitasItemListProps) => void;
   removeReceitaItemFromFavoritos: (id: string) => void;
}

export const FavoritoContext = createContext<ReceitaContextProvider>({
   addReceitaItemToFavoritos: (receitaItem: ReceitasItemListProps) => {},
   receitaItemList: [
      {
         id: '',
         title: '',
         image: ''
      }
   ],
   removeReceitaItemFromFavoritos: (id: string) => {}
});

export const FavoritoProvide = ({ children }: ContextProps) => {
   const [receitaItemList, setReceitaItemList] = useState<ReceitasItemListProps[]>([]);

   useEffect(() => {
      getData().then((res) => {
         setReceitaItemList(res ? res : []);
      });
   }, []);

   //asyncStorage
   const storeData = async (value: ReceitasItemListProps[]) => {
      try {         
         const jsonValue = JSON.stringify(value);
         await AsyncStorage.setItem('my-key', jsonValue);
      } catch (err) {
         // colocar erro aqui
      }
   };

   //asyncStorage
   const getData = async () => {
      try {
         const jsonValue = await AsyncStorage.getItem('my-key');
         return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (err) {
         // colocar erro aqui
      }
   };

   function addReceitaItemToFavoritos(receitaItem: ReceitasItemListProps) {
      setReceitaItemList([...receitaItemList, receitaItem]);
      storeData([...receitaItemList, receitaItem]);
   }

   function removeReceitaItemFromFavoritos(id: string) {
      let newReceitaItemList = receitaItemList.filter((receitaItem) => {
         return receitaItem.id !== id;
      });
      setReceitaItemList(newReceitaItemList);
      storeData(newReceitaItemList);
   }

   return (
      <FavoritoContext.Provider
         value={{
            receitaItemList,
            addReceitaItemToFavoritos,
            removeReceitaItemFromFavoritos
         }}>
         {children}
      </FavoritoContext.Provider>
   );
};
