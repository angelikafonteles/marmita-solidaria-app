import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

const Esqueci_Senha_Tela_01 = ({navigation}) => {
    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Esqueci a Senha
                    </Text>
                    <View style={[styles.box_alinhamento, { flexDirection: `column` }]}>
                    <Text style={styles.title_box}>Informe seu email</Text>
                        <TextInput
                        placeholder="exemplo@email.com"
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Enviar} onPress={() => navigation.navigate('Esqueci_Senha_Tela_01')}>
                            <Text style={{color: "white"}}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Esqueci_Senha_Tela_02')}>
                            <Text style={{color: "white"}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        
        </>
    );
}

export default Esqueci_Senha_Tela_01

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
    botao_Enviar:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Voltar:{
        backgroundColor: "#F21E1E",
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


