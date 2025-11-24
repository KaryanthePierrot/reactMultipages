import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Frases() {
  const fraseInit = 'Toque no botão para gerar frases';
  const [frase, setFrase] = useState(fraseInit);

  const frases = [
    'Bom dia',
    'Como você está?',
    'A vida é tão boa',
    'karyan programa muito',
    'Kevyn disse que no Triple Agent o argumento do Guilherme seria invalido pois ele era esquisito',
    'Ala Castro me dá medoi',
    'Nunca duvide da Big N',
    'Ananta está chegando',
    'Hualalala',
    'Huala',
    'Hualala',
  ];

  const geraFrases = () => {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
  };
  const limparFrases = () => {
    setFrase(fraseInit);
  };

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}>Frases</Text>

      <View style={styles.card}>
        <Text style={styles.frase}>{frase}</Text>
      </View>

      <View style={styles.boxBtn}>
        <Pressable
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
          onPress={geraFrases}>
          <Text style={styles.textBtn}>Gerar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.btn,
            styles.setBtn,
            pressed && { opacity: 0.8 },
          ]}
          onPress={limparFrases}>
          <Text style={styles.textBtn}>Limpar</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b1eaf1ff',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  card: {
    backgroundColor: '#73f567ff',
    width: '90%',
    height: 100,
    borderRadius: 20,
    borderWidth: 3,
    justifyContent: 'center',
  },

  frase: {
    textAlign: 'center',
    fontSize: 20,
    color: '#146603ff',
  },

  boxBtn: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width:'90%',
  },

  btn: {
    margin: 20,
    backgroundColor: '#0d30deff',
    padding:15,
    borderRadius: 50,
    width: '40%',
    borderColor: '',
  },

  setBtn: {
    backgroundColor: 'red',
  },

  textBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
