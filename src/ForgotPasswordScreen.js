import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  conn,
  getUser,
  userExiste,
  createTableUsers,
  createUser,
} from '../database/bd';

export default function RegisterScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [confirmarpass, setConfirmarpass] = useState('');
  const handleRegister = async () => {
    if (!user || !pass || !confirmarpass) {
      alert('Preencha todos os campos!');
      return;
    }

    if (pass !== confirmarpass) {
      alert('As passs não coincidem!');
      return;
    }

    if (pass.length < 4) {
      alert('A pass deve ter pelo menos 4 caracteres!');
      return;
    }

    try {
      await createTableUsers();

      const db = await conn();
      const usersExistentes = await db.getAllAsync(
        'SELECT * FROM users WHERE user = ?',
        user
      );

      if (usersExistentes.length > 0) {
        alert('Este usuário já existe!');
        return;
      }

      await createUser(user, pass);
      alert('Conta criada com sucesso!');
      navigation.navigate('index');
    } catch (error) {
      alert('Erro ao criar conta: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        placeholder="pass"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar pass"
        secureTextEntry
        value={confirmarpass}
        onChangeText={setConfirmarpass}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
        <Text style={styles.link}>Voltar ao login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#f82b06ff',
    width: '90%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#f82b06ff', marginTop: 15, fontWeight: 'bold' },
});
