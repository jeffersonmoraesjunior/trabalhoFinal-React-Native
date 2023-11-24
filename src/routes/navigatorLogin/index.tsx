import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../../components/authenticate/AuthContext';
import Login from '../../screens/login';
import Cadastro from '../../screens/cadastro/index';
import { Receitas } from '../../screens/receitas';
import { ReceitaDetalhes } from '../../screens/receitaDetalhes';
import { EsqueciSenha } from '../../screens/esqueciSenha';
import { Favoritos } from '../../screens/favoritos';

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
               <Stack.Screen
                  name="MyTabs"
                  component={MyTabs}
                  options={({ navigation }) => ({
                     headerTitle: '',
                     headerRight: () => (
                        <Image
                           source={require('../../assets/logo.png')}
                           style={{ width: 90, height: 90, marginRight: 20 }}
                        />
                     ),

                     headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                           <Text style={{ color: '#fff', fontWeight: 'bold', marginLeft: 10 }}>
                              SAIR
                           </Text>
                        </TouchableOpacity>
                     )
                  })}
               />

               <Stack.Screen name="ReceitaDetalhes" component={ReceitaDetalhes} />
               <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
               <Stack.Screen name="Favoritos" component={Favoritos} />
            </Stack.Navigator>
         </AuthProvider>
      </NavigationContainer>
   );
};

export default NavigatorLogin;
