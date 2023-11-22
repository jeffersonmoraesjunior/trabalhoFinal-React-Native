import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavigatorLogin from './src/components/navigatorLogin';
import { AuthProvider } from './src/components/authenticate/AuthContext';

export default function App() {
   return (
      <AuthProvider>
         <StatusBar style="auto" />
         <NavigatorLogin />
      </AuthProvider>
   );
}
