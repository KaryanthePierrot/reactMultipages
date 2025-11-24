import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo à Tela Inicial</Text>

      <View>
        <Text></Text> // quebra de linha
      </View>

      <Text style={styles.text}>Ir para Detalhes</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Detalhes')}
        style={styles.button}>
        <Text style={styles.buttonText}>Ver os Detalhes </Text>
      </TouchableOpacity>

      <Text style={styles.text}>Tela de Frases</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Frases')}
        style={styles.button}>
        <Text style={styles.buttonText}>Gerar Frases</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Tela de IMC</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('IMC')}
        style={styles.button}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Converter Temperaturas</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Temp')}
        style={styles.button}>
        <Text style={styles.buttonText}>Temp || Inativo ||</Text>
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
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#e9624bff',
    width: '40%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  text: {
    fontSize: 24,
  },
});
