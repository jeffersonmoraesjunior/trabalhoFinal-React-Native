import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./style";
import Logo from "./src/assets/logo.png"
import { Button } from "../../components/ButtonSubmit";
export default function App() {
  return (
    <View style={styles.login}>
     
       <Image source={Logo} style={styles.logo}/>
        <Text style={styles.titulo}>Cadastro</Text>

        <View>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          placeholder="Nome"
          keyboardType="email-address"
        />
        </View>

        <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          placeholder="Email"
          keyboardType="email-address"
        />
        </View>

        <View>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          placeholder="Senha"
          keyboardType="visible-password"
        />
        </View>

        <View>
        <Text style={styles.label}>Confirme senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          placeholder="Confirmar senha"
          keyboardType="visible-password"
        />
        </View>

        <Button title="Cadastrar"></Button>

    </View>

  )};
