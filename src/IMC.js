import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export default function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [diag, setDiag] = useState('');

  const CaulcularImc = () => {
    if (peso && altura) {
      let imc =
        peso.replace(',', '.') /
        (altura.replace(',', '.') * altura.replace(',', '.'));
      setResultado(imc.toFixed(2));

      if (imc < 18.5) {
        setDiag('MAgreza');
      } else if (imc >= 18.5 && imc <= 24.99) {
        setDiag('Normal');
      } else if (imc >= 25 && imc <= 29.99) {
        setDiag('Sobrepeso');
      } else if (imc >= 30 && imc <= 34.99) {
        setDiag('Obesidade grau I');
      } else if (imc >= 35 && imc <= 39.99) {
        setDiag('Obesidade grau II');
      } else if (imc >= 40) {
        setDiag('Obesidade grau III');
      } else {
        setDiag('Fora de registro');
      }
    } else {
      alert('Por favor, digite seu peso e sua altura corretamente');
    }
  };

  // let resultado = imc();

  function alerta() {
    alert('você clicou no botão!!!! PQ????');
  } // forma arcaica, vou usar essa.

  // const alerta2 = ()=> {
  //   alert("você clicou no outro botão!!!! PQ????")
  // } -- forma moderna

  // function imc() {
  //   let altura = 1.73;
  //   let peso = 72;
  //   let resultado2 = peso / (altura * altura);
  //   alert('O seu resultado é: ' + resultado2.toFixed(2));
  //   return resultado2.toFixed(2);
  // }
  /*
if(crianca == "trabalha"){
  return print("CRUIMINOSO!!")
} else if(adulto.condicao == "trabalha"){
  return print("money")
} else if(adutlo && crianca == "trabalha"){
  return ("cruiminoso")
}
*/

  return (
    <View style={styles.app}>
      <View style={styles.principal}>
        <Text style={styles.titulo}>Olá, este é o primeiro App de Karyan</Text>

        <Text style={styles.texto}>Este é o meu texto de boas vindas</Text>
        <Text style={styles.texto}>Então, bem vindo(a)</Text>

        <Text style={styles.texto}> Vamos começar, calculando seu IMC </Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="digite seu peso"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}></TextInput>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="digite sua altura"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}></TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={CaulcularImc}>
            <Text style={styles.buttonText}>Calcular seu IMC</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.texto}>Resultado do seu IMC: {resultado}</Text>
          <Text style={styles.texto}>Seu diagnóstico é: {diag} </Text>
        </View>
      </View>
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

  principal: {
    alignItems: 'center',
    padding: 25,
    borderRadius: 30,
  },

  titulo: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  texto: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#001d5cff',
  },

  input: {
    borderColor: '#002a85ff',
    borderWidth: 2,
    width: '350',
    height: 50,
    margin: 7,
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    color: '#001d5cff',
    fontSize: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  button: {
    borderRadius: 70,
    borderWidth: 2,
    marginTop: 15,
    backgroundColor: '#a0e94eff',
    width: '90%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#001d5cff', fontWeight: 'bold', fontSize: 30, margin: 20 },
});
