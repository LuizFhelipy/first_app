import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Texto from '../../../components/Texto';
import BotaoComprar from './BotaoComprar';

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    function handleButtonOnPress() {
        console.log("clicked");
      }
    return <>
    <Texto style={style.nome}>{nome}</Texto>
        <View style={style.fazenda}>
            <Image source={logoFazenda} style={style.imagemFazenda}/>
            <Texto style={style.nomeFazenda}>{nomeFazenda}</Texto>
        </View>  
        <Texto style={style.descricao}>{descricao}</Texto>
        <Texto style={style.preco}>{preco}</Texto>
        <BotaoComprar onPress={ handleButtonOnPress } style={style.botao}>{botao}</BotaoComprar>
    </>
}

const style = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight:26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    imagemFazenda: {
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
      },
});