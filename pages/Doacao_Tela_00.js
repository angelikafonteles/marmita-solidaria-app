import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

import { firebaseConfig } from '../src/Firebaseconfig';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { async } from '@firebase/util';

import { Database, getDatabase, ref, set, update, getFirestore } from "firebase/database";
import { inserirMarmita } from './services/ApiService';


const Doacao_Tela_00 = ({navigation}) => {

    const [restauranteId, setRestauranteId] = React.useState('');
    const [dataFeitura, setDataFeitura] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [observacao, setObservacao] = React.useState('');
    const [quantidade, setQuantidade] = React.useState('');

    const inserirDoacao = async () => {
        try {
            await inserirMarmita(restauranteId, dataFeitura, descricao, observacao, observacao, quantidade);
            navigation.navigate('Doacao_Tela_01');
          } catch (ex) {
            console.log(ex);
          }
    };

    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Doação
                    </Text>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}></Text>
                        <TextInput
                        placeholder="dd/mm/aaaa hh:mm:ss"
                        value={dataFeitura}
                        onChangeText={value => setDataFeitura(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}></Text>
                        <TextInput
                        placeholder="descrição"
                        value={descricao}
                        onChangeText={value => setDescricao(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}></Text>
                        <TextInput
                        placeholder="quantidade"
                        value={quantidade}
                        onChangeText={value => setQuantidade(value)}
                        style={styles.info_request}
                        />                        
                    </View>
        
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Inserir} onPress={() => inserirDoacao()}>
                            <Text style={{color: "white"}}>Inserir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao_Sair} onPress={() => navigation.navigate('Login_Tela_00')}>
                            <Text style={{color: "white"}}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </>
    );
}

export default Doacao_Tela_00

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#368FCA',
        paddingLeft:20,
        paddingRight:20,
    },
    container_intern: {
        backgroundColor: '#76C0F1',
        borderRadius: 50,
        //justifyContent: 'left',
        //width: 100, 
        height: 250,
        //textAlign: "left",
        alignItems: "center",  
        justifyContent: 'space-around',      
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        paddingTop:10,
    },
    info_request: {
        width: 200,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    title_box:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    box_alinhamento:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //paddingTop:10,
    },
    botao_Sair:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Inserir:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        //width: 300,
        //backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        paddingTop:10,
    }
});


