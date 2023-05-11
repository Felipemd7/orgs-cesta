
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/views/Cesta';


export default function App() {
  return (
    <SafeAreaView >
      <Cesta />
      <StatusBar/>
    </SafeAreaView >
  );
}


