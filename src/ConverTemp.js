import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function ConverTemp() {
  let resul;
  const [resultado, setResultado] = useState();
  const [tempType, setTempType] = useState('c');
  const [tempType2, setTempType2] = useState('c');
  const [temp, setTemp] = useState();

  const converteTemp = () => {
    if (tempType == tempType2) {
      alert('cê tá crazy mano, seleciona valores diferentes pelo menos!');
    } else if (tempType == 'c' && tempType2 == 'f') {
      parseInt(temp);
      resul = 1.8 * temp + 32;
      setResultado(resul);
      setTemp('');
    } //1 cf
    else if (tempType == 'k' && tempType2 == 'f') {
      parseInt(temp);

      resul = temp * 1.8 - 459.67;
      setResultado(resul.toFixed(2));
      setTemp('');
    } //2 kf
    else if (tempType == 'c' && tempType2 == 'k') {
      parseInt(temp);

      resul = temp + 273.15;
      setResultado(resul);
      setTemp('');
    } //3 ck

    // else if (tempType == 'f' && tempType2 == 'k') {
    // parseInt(temp);

    //   resul = (temp + 459.67) * (5 / 9);
    //   setResultado(resul.toFixed(2));
    //   setTemp('')

    // }//4 fk
    else if (tempType == 'f' && tempType2 == 'c') {
      parseInt(temp);

      resul = (temp - 32) / 1.8;
      setResultado(resul.toFixed(2));
      setTemp('');
    } //5 fc
    else if (tempType == 'k' && tempType2 == 'c') {
      parseInt(temp);

      resul = temp - 273.15;
      setResultado(resul.toFixed(2));
      setTemp('');
    } //6 kc
  };

  return (
    <View style={styles.container}>
      <View style={styles.tituloBox}>
        <Text style={styles.titulo}>
          Bom dia Andarilho, vamos converter temperaturas!
        </Text>
      </View>

      <View style={styles.textbox}>
        <Text style={styles.text}>
          Vamos primeiro definir o tipo de temperatura que vamos converter
        </Text>
        <View>
          <Picker
          style={styles.picker}
            selectedValue={tempType}
            onValueChange={(itemValue, itemIndex) => setTempType(itemValue)}>
            <Picker.Item label="Celsius" value="c" />
            <Picker.Item label="Farenheit" value="f" />
            <Picker.Item label="Kelvin" value="k" />
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.text}>Quantos graus você quer saber?</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="digite a temperatura"
            value={temp}
            onChangeText={setTemp}></TextInput>
        </View>

        <View>
          <Text style={styles.text}>Para qual temperatura vamos converter?</Text>

          <View>
            <Picker
            style={styles.picker}
              selectedValue={tempType2}
              onValueChange={(itemValue, itemIndex) => setTempType2(itemValue)}>
              <Picker.Item label="Celsius" value="c" />
              <Picker.Item label="Farenheit" value="f" />
              <Picker.Item label="Kelvin" value="k" />
            </Picker>
          </View>
        </View>

        <View>
          <Pressable
            style={({ pressed }) => [
              styles.btnBom,
              pressed && { opacity: 0.8, backgroundColor: 'green' },
            ]}
            onPress={converteTemp}>
            <Text style={{ fontSize: 30, margin: 20 }}>Converter</Text>
          </Pressable>
        </View>

        <Text style={styles.text}>a temperatura que busca é: {resultado}</Text>
        <Text style={styles.text}>
          {temp} {tempType} {tempType2}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7da1db',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloBox: {},

  titulo: {
    fontWeight: 'bold',
    fontSize: '20px',
  },

  input: {
    borderWidth: 1,
    borderRadius: 70,
    padding: 7,
    borderColor: 'black',
    backgroundColor: 'white',
    margin: 10,
    textAlign:'center'
  },

  btnBom: {
    borderRadius: 70,
    borderWidth: 2,
    marginTop: 15,
    backgroundColor: '#737373',
  },

  picker: {
    alignSelf:'center',
    marginTop: 10,
    marginBottom: 10,
    textAlign:'center',
    fontSize: 15,
    border: 2,
    borderColor: '#7b70e6',
    width: 150,
    height: 50,
    borderRadius: 70,
    padding: 15,
    color: '#7b70e6',
  },
  textbox:{
    margin:30,
    border:'5px',
    borderColor:"black",
  },
  text: {
    alignSelf:'center',
    marginTop: 10,
    marginBottom: 10,
    textAlign:'center',
    fontSize: 15,
    border: 2,
    borderColor: '#7b70e6',
    width: 150,
    height: 50,
    borderRadius: 70,
    color: '#2d2d2e',
  },
});
