
import React from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import Cesta from './src/views/cesta/componentes';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';



export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fonteCarregada) {
    return <Text>Fonte não carregada</Text>
  }

  return (
    <SafeAreaView >
      <Cesta />
      <StatusBar/>
    </SafeAreaView >
  );
}


