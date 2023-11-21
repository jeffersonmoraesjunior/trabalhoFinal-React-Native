import React, { useState } from 'react';
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
import { loginUser } from '../../services/api';

function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    console.log('Iniciando o login');
    const usuario = await loginUser(email, senha);

    if (!email || !senha) {
      return;
    }

    console.log('Usuário logado:', usuario);
    navigation.navigate('LivroReceitas');
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
