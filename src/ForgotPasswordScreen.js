import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      alert('Por favor, digite seu e-mail.');
      return;
    }
    alert(`Um link de redefinição foi enviado para: ${email} (é fake, ainda não funciona, cria um novo user)`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Enviar link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: '#b1eaf1ff',
    padding: 20,
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 2,
    height: 50,
    margin: 7,
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    color: '#001d5cff',
    fontSize: 18,
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
