import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  conectarBanco,
  getUser,
  criarTabelaUsers,
  createUser,
  userExiste,
} from '../database/bd';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async () => {
    if (!user || !pass) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const userExiste = await getUser(user, pass); //

      if (userExiste) {
        Alert.alert('Sucesso', 'Login realizado!');
        navigation.navigate('Home'); //
      } else {
        Alert.alert('Erro', 'Usuário ou pass incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vinda(o) Usuário(a)!</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu Usuário"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua Senha"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Esqueci minha pass</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b1eaf1ff',
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  input: {
    width: '90%',
    height: 45,
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#e9624bff',
    width: '90%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#e9624bff', marginTop: 15, fontWeight: 'bold', fontSize: 20 },
});
