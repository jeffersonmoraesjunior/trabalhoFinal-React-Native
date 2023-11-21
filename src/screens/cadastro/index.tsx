import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native';
import { styles } from './style';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/ButtonSubmit';
import { useAuth } from '../../components/Authenticate/AuthContext';
import { registerUser } from '../../services/Api/api';

export default function Cadastro() {
   const { setIsLogged, setUserLogged } = useAuth();
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [confirmarSenha, setConfirmarSenha] = useState('');

   const handleRegister = async () => {
      const novoUsuario = await registerUser(nome, email, senha);

      if (novoUsuario) {
         setIsLogged(true);
         setUserLogged(novoUsuario);
      }
   };

   return (
      <View style={styles.login}>
         <Image source={Logo} style={styles.logo} />

         <View>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setNome(text)}
               placeholder="Nome"
               keyboardType="default"
            />
         </View>

         <View>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setEmail(text)}
               placeholder="Email"
               keyboardType="email-address"
            />
         </View>

         <View>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setSenha(text)}
               placeholder="Senha"
               keyboardType="visible-password"
            />
         </View>

         <View>
            <TextInput
               style={styles.cadastrar}
               onChangeText={(text) => setConfirmarSenha(text)}
               placeholder="Confirmar senha"
               keyboardType="visible-password"
            />
         </View>

         <Button title="Cadastrar" onPress={handleRegister}></Button>
      </View>
   );
}
