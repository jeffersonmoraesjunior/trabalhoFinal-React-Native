import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
   KeyboardAvoidingView,
   Platform,
   ScrollView,
   TextInput,
   TouchableOpacity,
   View,
   Image,
   Text
} from 'react-native';
import { styles } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { loginUser } from '../../services/Api/api';

function Login() {
   const navigation = useNavigation<NavigationProp<any>>();
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');

   const handleLogin = async () => {
      if (!email) {
         Alert.alert('Erro', 'Por favor, insira um email válido.');
         return;
      }

      if (!senha) {
         Alert.alert('Erro', 'Por favor, insira uma senha.');
         return;
      }

      try {
         const usuario = await loginUser(email, senha);

         if (usuario) {
            // Verifique se o usuário é válido
            navigation.navigate('Receitas'); // Navegue para a tela de Receitas
         } else {
            Alert.alert('Erro', 'Email ou senha inválidos.');
         }
      } catch (erro) {
         console.error('Erro durante o login:', erro);
         Alert.alert('Erro', 'Houve um problema durante o login. Por favor, tente novamente.');
      }
   };

   const handleRegister = () => {
      navigation.navigate('Cadastro');
   };

   return (
      <View style={styles.container}>
         <Image source={require('../../assets/logo.png')} style={styles.logo} />
         <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
            <ScrollView keyboardShouldPersistTaps="always">
               <View style={styles.form}>
                  <TextInput
                     style={styles.input}
                     placeholder="E-mail"
                     onChangeText={(text) => setEmail(text)}
                     keyboardType="email-address"
                  />

                  <TextInput
                     style={styles.input}
                     placeholder="Senha"
                     onChangeText={(text) => setSenha(text)}
                     secureTextEntry
                  />
                  <TouchableOpacity>
                     <Text style={styles.helpText}>Esqueci minha senha</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                     <View style={styles.buttonEntrar}>
                        <Text style={styles.loginText}>Entrar</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                     <View style={styles.wave}>
                        <Text style={styles.registerText}>Ainda não tem conta? Clique aqui.</Text>
                     </View>
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </KeyboardAvoidingView>
      </View>
   );
}

export default Login;
