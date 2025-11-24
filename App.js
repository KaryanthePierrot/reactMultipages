import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import Frases from './src/GeraFrases';
import IMC from './src/IMC';
import index from './src/index'
import RegisterScreen from './src/RegisterScreen'
import ForgotPasswordScreen from './src/ForgotPasswordScreen'
import ConverTemp from './src/ConverTemp'
// import CriarUsuario from './src/CriarUsuario';
// import Login from './src/login';\

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="index"
        screenOptions={{
          headerStyle: { backgroundColor: '#e9624bff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Frases" component={Frases} />
        <Stack.Screen name="Temp" component={ConverTemp} />

        {/* <Stack.Screen name="Tarefas" component={TarefasScreen} /> */}
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen name="IMC" component={IMC} />
        {/* <Stack.Screen name="Temperatura" component={TemperaturaScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>


  );



}