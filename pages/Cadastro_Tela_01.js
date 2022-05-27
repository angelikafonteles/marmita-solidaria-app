import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

const Cadastro_Tela_01 = ({navigation, route}) => {
    const user = {id: route.params.id};
    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Cadastro
                    </Text>
                    <View style={styles.mensagem}>
                        <Text style={{color: "white"}}> Cadastrado efetuado com sucesso!</Text>
                    </View>
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Menu} onPress={() => navigation.navigate('Menu_Tela_00', user)}>
                            <Text style={{color: "white"}}>Menu</Text>
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

export default Cadastro_Tela_01

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
    botao_Menu:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Sair:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        width: 250,
        height: 250,
        //paddingTop: 50,
        //paddingBottom: 60,
        justifyContent: 'space-around',
        alignItems: "center",             
    },
    mensagem:{
        //width: 200,
        alignItems: "center",
        
    },
  
});


