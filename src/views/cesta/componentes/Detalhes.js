import React from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';
import Font_regular from "../../../componetes/Regular";
import Font_negrito from "../../../componetes/Bold";
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
return <>
     <Font_negrito style={estilos.nomeCesta}>Cesta de Verdura</Font_negrito>
        <View style={estilos.orgFazenda}>
        <Image style={estilos.logoFazenda} source={logo}></Image>   
    <   Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>

        <Font_regular style={estilos.descricao}>
        Uma cesta com produtos 
        selecionados cuidadosamente da 
        fazenda direto para a cozinha.
        </Font_regular>

        <Text style={estilos.preco}>$40,00</Text>
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
    }

}); 