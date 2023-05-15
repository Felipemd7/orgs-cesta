
import React from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import Cesta from './src/views/cesta/componentes';
import mock from './src/mocks/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';



export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fonteCarregada) {
    return <AppLoading />; //bliblioteca usada para chamar a tela de splhasscreen quando ouver um erro na fonte
  }

  return (
    <SafeAreaView >
      <Cesta {...mock}/>
      <StatusBar/>
    </SafeAreaView >
  );
}


