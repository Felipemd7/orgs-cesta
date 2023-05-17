import React from "react";
import {StyleSheet, View, ScrollView } from 'react-native';
import Topo from './Topo';
import Detalhes from "./Detalhes";
import Itens from "./Itens";



export default function Cesta({topo, detalhes, itens}) {
    return <ScrollView>
        <Topo {...topo}/>    

        <View style={estilos.espacoCesta}>            
        <Detalhes {...detalhes}/>
        <Itens {...itens}/>
        </View>
        
    </ScrollView>

    
}

const estilos = StyleSheet.create({
  
   
    espacoCesta: {
        paddingHorizontal: 16,
        paddingVertical: 9,
    }
    

}); 