import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login/index';
import Cadastro from '../../screens/Cadastro/index';  

const Stack = createStackNavigator();

const NavigatorLogin = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorLogin;