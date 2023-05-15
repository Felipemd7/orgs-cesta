import React from "react";
import { StyleSheet, Text } from "react-native";


export default function Font_regular({ children, style }) {
    return <Text style={[style, estilos.texto]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    }
});


