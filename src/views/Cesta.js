import React from "react";
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width; //pegando dimensões da tela

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>       

        <View style={estilos.espacoCesta}>            
        <Text style={estilos.nomeCesta}>Cesta de Verduras</Text>

        <View style={estilos.orgFazenda}>
         <Image style={estilos.logoFazenda} source={logo}></Image>   
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>

        <Text style={estilos.descricao}>
        Uma cesta com produtos 
        selecionados cuidadosamente da 
        fazenda direto para a cozinha.
        </Text>
        
        <Text style={estilos.preco}>$40,00</Text>
        </View>
        
    </>

    
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, // altura/largura * width
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 50,    
        
    },
    nomeCesta: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold"
    },
    espacoCesta: {
        paddingHorizontal: 16,
        paddingVertical: 8,
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
    }

}); 