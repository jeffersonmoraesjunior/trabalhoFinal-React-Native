import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../authenticate/AuthContext';
import Login from '../../screens/login';
import Cadastro from '../../screens/cadastro/index';

import { ReceitaDetalhes } from '../../screens/receitaDetalhes/';
import { EsqueciSenha } from '../../screens/esqueciSenha';
import MyTabs from '../bottomTabsNavigator';
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
               <Stack.Screen name="MyTabs" component={MyTabs} />
               <Stack.Screen name="ReceitaDetalhes" component={ReceitaDetalhes} />
               <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
            </Stack.Navigator>
         </AuthProvider>
      </NavigationContainer>
   );
};

export default NavigatorLogin;
