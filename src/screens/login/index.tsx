import React, { useState } from 'react';
import {
   KeyboardAvoidingView,
   Platform,
   ScrollView,
   TextInput,
   TouchableOpacity,
   View,
   Image,
   Text,
   Alert
} from 'react-native';
import { styles } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { auth } from '../../services/firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
   const [userMail, setUserMail] = useState('');
   const [userPass, setUserPass] = useState('');
   const navigation = useNavigation<NavigationProp<any>>();

   function userLogin() {
      signInWithEmailAndPassword(auth, userMail, userPass)
         .then((userCredential) => {
            const user = userCredential.user;
            Alert.alert('Seja Bem Vindo', 'Aproveite nossas receitas', [{ text: 'OK' }]);
            navigation.navigate('MyTabs');
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
         });
   }

   const handleForgot = () => {
      navigation.navigate('EsqueciSenha');
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
                     onChangeText={(text) => setUserMail(text)}
                     keyboardType="email-address"
                  />

                  <TextInput
                     style={styles.input}
                     placeholder="Senha"
                     onChangeText={(text) => setUserPass(text)}
                     secureTextEntry
                  />
                  <TouchableOpacity onPress={handleForgot}>
                     <Text style={styles.helpText}>Esqueci minha senha</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.loginButton} onPress={userLogin}>
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
