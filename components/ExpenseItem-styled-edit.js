//importa React e o hook useState para controle de estado
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { FlatList, TextInput, View } from "react-native-web";

// importa os componentes nativos para contrulção de interface
import {
    View,                   //container de layout
    TextInput,              //Campo de entrada de texto
    Text,                   //Exibição de texto
    TouchableOpacity,       //Botão personalizável
    FlatList,               //Lista de rolagem eficiente
    StyleSheet,             //Estilização
    Alert                   //Exibição de alertas
} from "react-native";

//componente principal da aplicaçãi
export default HomeScreen() {
    //estado para os campos do formulário
    const [descricao, setDescricao] = useState('');   //descricao do gasto
    const [valor, setValor] = useState('');           //valor do gasto
    const [gastos, setGastos] = useState([]);         //lista de gastos
    const [editanoId, setEditanoId] = useState(null); //Id do item sendo editado

    //função para adicionar um novo gasto ou atualizar um existente
    const adicionarOuAtualizarGasto = () => {
        //validação campos não podem estar vazios
        if(!descricao || !valor){
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }
    }

}