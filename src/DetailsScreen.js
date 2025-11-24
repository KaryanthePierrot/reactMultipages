import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Detalhes</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Ir Para Home</Text>
      </TouchableOpacity>

      <View style={styles.desc}>
       
       <View>
        <Text style={styles.text}>
          Esta aplicação foi desenvolvida pelo aluno Westes Mesquita de DSM 4°;
          na Fatec Itaquera - Miguel Reale.
        </Text>
        // <Text></Text>
       </View>

        <View>
          <Text style={styles.text}>
            O Dev em questão é programador mobile atualmente, especializado em
            PHP e JAVA, porém como entusiasta de em desenvolvimento, está
            experimentando com neste projeto sua recepção em React Native.
          </Text>
          // <Text></Text>
        </View>

        <View>
          <Text style={styles.text}>
            O App atualmente se chama MultiPages, e consta com 3 aplicações
            distintas desenvolvidas previamente pelo autor ao longo do semestre
            de 2035, e unificadas num só, contando também com uma página de
            login, e registro.
            <Text></Text>
          </Text>
        </View>
      </View>
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
  text: {
    marginTop: 5,
    marginBottom: 5, 
    fontSize: 24,
    textAlign: 'center',
  },
  desc: {
    width: '90%',
    marginTop: 10
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
});
