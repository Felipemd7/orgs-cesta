import React from "react";
import {Text, Image, View, StyleSheet } from 'react-native';
import Font_negrito from "../../../componetes/Bold";

export default function Itens({titulo, lista}){
    return <>
    <Font_negrito style={estilos.titulo}>{titulo}</Font_negrito>
    {lista.map(({nome, imagem}) => {
       return <View key={nome} style={estilos.item}>         
        <Image source={imagem} etyle={estilos.imagem}/>
        <Text style={estilos.nome}>{nome}</Text>
        </View>
    }) }
    
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 24,
        textAlign: "center",                
        
    },
    item:{
        flexDirection: "row",
        alignItems: "center",        
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
    },
    imagem:{
        width: 10,
        height: 10           
    },
    nome:{
        color: "#464646",
        fontSize: 16,
        marginLeft: 11,        
    }
});