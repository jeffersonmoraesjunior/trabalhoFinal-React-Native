import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavigatorLogin from './src/components/NavigatorLogin/index';
import { AuthProvider } from './src/components/Authenticate/AuthContext';

export default function App() {
   return (
      <AuthProvider>
         <StatusBar style="auto" />
         <NavigatorLogin />
      </AuthProvider>
   );
}
