import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Font_negrito({ children, style }) {
    return <Text style={[style, estilos.textoNegrito]}>{children}</Text>
}

const estilos = StyleSheet.create({
    textoNegrito: {
        fontFamily: "MontserratBold",
        
    }
});   