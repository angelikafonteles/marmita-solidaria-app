import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

import { firebaseConfig } from '../src/Firebaseconfig';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { async } from '@firebase/util';

import { Database, getDatabase, ref, set, update, getFirestore } from "firebase/database";
import { cadastrarUsuario } from './services/ApiService';


const Cadastro_Tela_00 = ({navigation}) => {
    const app = initializeApp(firebaseConfig);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [razaoSocial, setRazaoSocial] = React.useState('');
    const [cnpj, setCnpj] = React.useState('');
    const [nomeFantasia, setNomeFantasia] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [cep, setCep] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [complemento, setComplemento] = React.useState('');

    const createUser = async () => {
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await cadastrarUsuario(razaoSocial, cnpj, nomeFantasia, email, telefone, cep, numero, complemento);
            navigation.navigate('Cadastro_Tela_01');
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
                        Cadastro
                    </Text>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Razão Social: </Text>
                        <TextInput
                        placeholder=""
                        value={razaoSocial}
                        onChangeText={value => setRazaoSocial(value)}
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.box_alinhamento_CNPJ}>
                        <Text style={styles.title_box}>CNPJ: </Text>
                        <TextInput
                        placeholder=""
                        value={cnpj}
                        onChangeText={value => setCnpj(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Nome Fantasia: </Text>
                        <TextInput
                        placeholder=""
                        value={nomeFantasia}
                        onChangeText={value => setNomeFantasia(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Email: </Text>
                        <TextInput
                        placeholder=""
                        value={email}
                        onChangeText={value => setEmail(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento_Telefone}>
                        <Text style={styles.title_box}>Telefone: </Text>
                        <TextInput
                        placeholder=""
                        value={telefone}
                        onChangeText={value => setTelefone(value)}
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Cep: </Text>
                        <TextInput
                        placeholder=""
                        value={cep}
                        onChangeText={value => setCep(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Número: </Text>
                        <TextInput
                        placeholder=""
                        value={numero}
                        onChangeText={value => setNumero(value)}
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Complemento: </Text>
                        <TextInput
                        placeholder=""
                        value={complemento}
                        onChangeText={value => setComplemento(value)}
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.box_alinhamento_Senha}>
                        <Text style={styles.title_box}>Senha: </Text>
                        <TextInput
                        placeholder=""
                        value={password}
                        onChangeText={value => setPassword(value)}
                        style={styles.info_request}
                        />
                    </View>
                    
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Cadastrar} onPress={() => createUser()}>
                            <Text style={{color: "white"}}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Login_Tela_00')}>
                            <Text style={{color: "white"}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        
        </>
    );
}

export default Cadastro_Tela_00

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
        //justifyContent: 'center',
        //width: 100, 
        height: 450,
        //textAlign: "center",
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
    },
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Cadastrar:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        width: 300,
        //backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        //marginHorizontal: 50,
        
    },
    esqueci_a_senha:{
        flexDirection: 'row',
        justifyContent: "center",
    },
    box_alinhamento_CNPJ:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 55,
    },
    box_alinhamento_Telefone:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 30,
    },
    box_alinhamento_Endereco:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 25,
    },
    box_alinhamento_Senha:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 45,
    },
});


