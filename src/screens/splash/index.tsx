import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

const Splash = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegue para a próxima tela após 3 segundos (ou o tempo desejado)
      navigation.replace('App'); // Substitua 'Main' pelo nome da sua tela principal
    }, 15000);

    return () => {
      clearTimeout(timer);
      setIsLoading(false);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2C84B' }}>
      <Image
        source={require('../../../assets/Splash7.gif')}
        style={{ width: '180%', height: '180%', resizeMode: 'contain', backgroundColor: '#F2C84B'  }}
      />
    </View>
  );
};

export default Splash;