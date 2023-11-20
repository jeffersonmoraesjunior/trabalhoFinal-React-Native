import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { styles } from './style';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/ButtonSubmit';

export default function Cadastro() {
   return (
      <View style={styles.login}>
         <Image source={Logo} style={styles.logo} />

         <View>
            <TextInput
               style={styles.input}
               onChangeText={() => {}}
               placeholder="Nome"
               keyboardType="email-address"
            />
         </View>

         <View>
            <TextInput
               style={styles.input}
               onChangeText={() => {}}
               placeholder="Email"
               keyboardType="email-address"
            />
         </View>

         <View>
            <TextInput
               style={styles.input}
               onChangeText={() => {}}
               placeholder="Senha"
               keyboardType="visible-password"
            />
         </View>

         <View>
            <TextInput
               style={styles.cadastrar}
               onChangeText={() => {}}
               placeholder="Confirmar senha"
               keyboardType="visible-password"
            />
         </View>

         <Button title="Cadastrar"></Button>
      </View>
   );
}
