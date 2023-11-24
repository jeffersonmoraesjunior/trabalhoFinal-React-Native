import axios, { AxiosResponse } from 'axios';
import { ReceitasItemListProps } from '../../components/receitasItem/index';

const apiKey = '16da7df46a7c42e49b04d54d2fc69efa';

{
   /* 
OUTRAS API:
c258de42b2cc470283cb1565168de7e0
04a499e9de144f359f241b3f37b72111
*/
}

const api = axios.create({
   baseURL: 'https://api.spoonacular.com/recipes/complexSearch/'
});

const apiInformacaoReceita = axios.create({
   baseURL: 'https://api.spoonacular.com/recipes'
});

interface getReceitasItemListResponse {
   count: number;
   results: ReceitasItemListProps[];
}

export function getReceitaItemList(): Promise<AxiosResponse<getReceitasItemListResponse, any>> {
   const response = api.get(`?apiKey=${apiKey}&sortDirection=asc`);
   return response;
}

export interface getReceitaItemDetailsResponse {
   id: string;
   title: string;
   image: string;
   instructions?: string[] | null;
   pricePerServing: number;
}

export function getReceitaItemDetails(
   id: string
): Promise<AxiosResponse<getReceitaItemDetailsResponse, any>> {
   const response = apiInformacaoReceita.get(
      `/${id}/information?apiKey=${apiKey}&includeNutrition=false`
   );

   return response;
}
