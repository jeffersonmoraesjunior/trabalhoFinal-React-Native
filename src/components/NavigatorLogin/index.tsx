import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login/index';
import Cadastro from '../../screens/cadastro/index';

const Stack = createStackNavigator();

const NavigatorLogin = () => {
   return (
      <NavigationContainer>
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
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default NavigatorLogin;
