import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import NavigatorLogin from './src/components/NavigatorLogin/index';
import { AuthProvider } from './src/components/Authenticate/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <NavigatorLogin />
        <StatusBar style="auto" />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

