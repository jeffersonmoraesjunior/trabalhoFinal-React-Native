import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import NavigatorLogin from './src/routes/navigatorLogin/index';
import { AuthProvider } from './src/components/authenticate/AuthContext';
import { FavoritoProvide } from './src/context/favoritoContext';
import Splash from './src/screens/splash/index';

const App = () => {
   const [isSplashVisible, setIsSplashVisible] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setIsSplashVisible(false);
      }, 2800);
   }, []);

   if (isSplashVisible) {
      return <Splash navigation={{ replace: () => setIsSplashVisible(false) }} />;
   }

   return (
      <AuthProvider>
         <FavoritoProvide>
            <>
               <StatusBar style="auto" />
               <NavigatorLogin />
            </>
         </FavoritoProvide>
      </AuthProvider>
   );
};

export default App;
