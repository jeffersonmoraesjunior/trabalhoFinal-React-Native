import axios, { AxiosResponse } from 'axios';
import { ReceitasItemListProps } from '../../components/receitasItem/index';

const apiKey = '59ee7cce3532466bac597219d24d819f';

{
   /* 
OUTRAS API:
639c4554bc084efb9be842975a919a83
16da7df46a7c42e49b04d54d2fc69efa
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
   const response = api.get(`?apiKey=${apiKey}&query=`);
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
