import React from "react";
import {StyleSheet, View } from 'react-native';
import Topo from './Topo';
import Detalhes from "./Detalhes";



export default function Cesta(){
    return <>
        <Topo/>    

        <View style={estilos.espacoCesta}>            
        <Detalhes/>
        </View>
        
    </>

    
}

const estilos = StyleSheet.create({
  
   
    espacoCesta: {
        paddingHorizontal: 16,
        paddingVertical: 9,
    }
    

}); 