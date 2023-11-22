import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../Authenticate/AuthContext';
import Login from '../../screens/login';
import Cadastro from '../../screens/cadastro/index';

import { ReceitaDetalhes } from '../../screens/ReceitaDetalhes/';
import { EsqueciSenha } from '../../screens/EsqueciSenha';
import  MyTabs  from '../bottomTabsNavigator'
const Stack = createStackNavigator();

const NavigatorLogin = () => {
   return (
      <NavigationContainer>
         <AuthProvider>
            <Stack.Navigator
               initialRouteName="Login"
               screenOptions={{
                  headerStyle: {
                     backgroundColor: '#f2c84b'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                     fontWeight: 'bold'
                  }
               }}>
               <Stack.Screen name=" " component={Login} />
               <Stack.Screen name="Cadastro" component={Cadastro} />
               <Stack.Screen
                  name="MyTabs"
                  component={MyTabs}
                 
               />
               <Stack.Screen name="ReceitaDetalhes" component={ReceitaDetalhes} />
               <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
            </Stack.Navigator>
         </AuthProvider>
      </NavigationContainer>
   );
};

export default NavigatorLogin;
