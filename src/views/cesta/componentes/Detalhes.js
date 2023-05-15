import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Font_regular from "../../../componetes/Regular";
import Font_negrito from "../../../componetes/Bold";



export default function Detalhes({nomeCesta, logoFazenda, nomeFazenda, descricao, preco, botao}) {
return <>
     <Font_negrito style={estilos.nomeCesta}>{nomeCesta}</Font_negrito>
        <View style={estilos.orgFazenda}>
        <Image style={estilos.logoFazenda} source={logoFazenda}></Image>   
    <   Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Font_regular style={estilos.descricao}>{descricao}</Font_regular>
        <Text style={estilos.preco}>{preco}</Text>
        <TouchableOpacity style={estilos.botao}>
        <Font_negrito style={estilos.textoBotao}>{botao}</Font_negrito> 
        </TouchableOpacity>
        </>

        
}

const estilos = StyleSheet.create({
  
    nomeCesta: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
       
    },
    
    orgFazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
         
    },
    logoFazenda:{
        width: 32,
        height: 32,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
        alignItems: "center",
    },
    textoBotao: {
        color: "white",
        fontSize: 16,
        lineHeight: 26,
    },

}); 