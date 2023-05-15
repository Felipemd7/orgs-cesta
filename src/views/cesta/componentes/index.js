import React from "react";
import {StyleSheet, View } from 'react-native';
import Topo from './Topo';
import Detalhes from "./Detalhes";



export default function Cesta({topo, detalhes}){
    return <>
        <Topo {...topo}/>    

        <View style={estilos.espacoCesta}>            
        <Detalhes {...detalhes}/>
        </View>
        
    </>

    
}

const estilos = StyleSheet.create({
  
   
    espacoCesta: {
        paddingHorizontal: 16,
        paddingVertical: 9,
    }
    

}); 