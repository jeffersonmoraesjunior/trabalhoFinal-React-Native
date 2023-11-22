import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native';
import { styles } from './style';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/buttonSubmit';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/firebase.config';
import Login from '../login/index';

export default function Cadastro() {
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [confirmarSenha, setConfirmarSenha] = useState('');
   const navigation = useNavigation<NavigationProp<any>>();

   const handleRegister = async () => {
      if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
         alert('Todos os campos devem ser preenchidos!');
         return;
      }
      if (senha !== confirmarSenha) {
         alert('A Senha e Confirmar senha não são iguais!');
      } else {
         createUserWithEmailAndPassword(auth, email, senha)
            .then((UserCredential) => {
               const user = UserCredential.user;
               alert('O usuario ' + email + ' foi criado. Faça o login.');
               navigation.navigate(' ');
            })
            .catch((error) => {
               const errorMessage = error.message;
               alert(errorMessage);
               navigation.navigate(' ');
            });
      }
   };

   // const handleRegister = async () => {
   //    const novoUsuario = await registerUser(nome, email, senha);

   //    if (novoUsuario) {
   //       setIsLogged(true);
   //       setUserLogged(novoUsuario);
   //    }
   // };

   return (
      <View style={styles.login}>
         <Image source={Logo} style={styles.logo} />

         <View style={styles.form}>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setNome(text)}
               placeholder="Nome"
               keyboardType="default"
            />

            <TextInput
               style={styles.input}
               onChangeText={(text) => setEmail(text)}
               placeholder="Email"
               keyboardType="email-address"
               autoComplete="email"
            />

            <TextInput
               style={styles.input}
               onChangeText={(text) => setSenha(text)}
               placeholder="Senha"
               keyboardType="visible-password"
               secureTextEntry
            />

            <TextInput
               style={styles.input}
               onChangeText={(text) => setConfirmarSenha(text)}
               placeholder="Confirmar senha"
               keyboardType="visible-password"
               secureTextEntry
            />

            <Button title="Cadastrar" onPress={handleRegister}></Button>
         </View>
      </View>
   );
}
