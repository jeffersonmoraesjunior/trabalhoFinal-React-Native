import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavigatorLogin from './src/components/navigatorLogin/index';
import { AuthProvider } from './src/components/authenticate/AuthContext';
import { FavoritoProvide } from './src/context/favoritoContext';

export default function App() {
   return (
      <AuthProvider>
         <FavoritoProvide>
            <StatusBar style="auto" />
            <NavigatorLogin />
         </FavoritoProvide>
      </AuthProvider>
   );
}
