import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../Authenticate/AuthContext';
import Login from '../../screens/Login';
import Cadastro from '../../screens/Cadastro/index';
import { Receitas } from '../../screens/Receitas/';
import { ReceitaDetalhes } from '../../screens/ReceitaDetalhes/';

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
                  name="Receitas"
                  component={Receitas}
                  options={{ headerShown: false }}
               />
               <Stack.Screen name="ReceitaDetalhes" component={ReceitaDetalhes} />
            </Stack.Navigator>
         </AuthProvider>
      </NavigationContainer>
   );
};

export default NavigatorLogin;
