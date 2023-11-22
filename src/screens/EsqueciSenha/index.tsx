// index.tsx
import React, { useState } from 'react';
import { TextInput, View, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './styles';
import Logo from '../../assets/logo.png';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase/firebase.config';
import {Button} from '../../components/buttonSubmit/index';

export function EsqueciSenha() {
   const [email, setEmail] = useState('');
   const navigation = useNavigation<NavigationProp<any>>();

   const handleResetPassword = () => {
      if (email !== '') {
         sendPasswordResetEmail(auth, email)
            .then(() => {
               alert(
                  'Foi enviado um email para: ' +
                     email +
                     '. Verifique a sua caixa de entrada no email.'
               );
               navigation.goBack();
            })
            .catch((error) => {
               const errorMessage = error.message;
               alert(
                  'Ops! Alguma coisa não deu certo. ' +
                     errorMessage +
                     '. Tente novamente ou pressione voltar.'
               );
               return;
            });
      } else {
         alert('É preciso informar um email válido.');
         return;
      }
   };

   return (
      
      <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
         <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu email"
            keyboardType="email-address"
         />
         <Button 
         title="Redefinir senha" 
         onPress={handleResetPassword}
         priority="secondary"
         />
      </View>
   );
}
