import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

import { firebaseConfig } from '../src/Firebaseconfig';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { async } from '@firebase/util';
import { findByEmail } from './services/ApiService';

const Login_Tela_00 = ({navigation}) => {
    const app = initializeApp(firebaseConfig);
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function login() {
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
            const user = await findByEmail(email);
            navigation.navigate('Menu_Tela_00', user)
        } catch (error) {
            console.log(error)
            navigation.navigate('Login_Erro_Tela_00');
        }
    }
    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Login
                    </Text>
                    <View style={[styles.box_alinhamento, { flexDirection: `column` }]}>
                        <Text style={styles.title_box}>Usuário</Text>
                        <TextInput
                        placeholder="exemplo@email.com"
                        value={email}
                        onChangeText={value => setEmail(value)}
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={[styles.box_alinhamento, { flexDirection: `column` }]}>
                        <Text style={styles.title_box}>Senha</Text>
                        <TextInput
                        placeholder=""
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Entrar} onPress={() => login()}>
                            <Text style={{color: "white"}}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hiperlink}>
                        <Text style={{color: "white"}} >Esqueceu a senha? </Text>
                        <TouchableOpacity>
                                <Text style={{color: "blue", textDecoration: "underline"}} onPress={() => navigation.navigate('Esqueci_Senha_Tela_00')}>Clique aqui</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hiperlink}>
                        <Text style={{color: "white"}} >Não possui cadastro? </Text>
                        <TouchableOpacity>
                                <Text style={{color: "blue", textDecoration: "underline"}} onPress={() => navigation.navigate('Cadastro_Tela_00')}>Clique aqui</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </>
    );
}

export default Login_Tela_00

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
        //width: 100, 
        height: 300,
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
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4E5A65',
    },
    box_alinhamento:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'left',
    },
    botao_Entrar:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },
    hiperlink:{
        flexDirection: 'row',
        justifyContent: "center",
    },
});


