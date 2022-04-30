import axios from 'axios';
import React from "react";

export async function buscarCep(cep, numero) {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    const endereco = {
        rua: result.data.logradouro,
        numero: numero,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        cep: result.data.cep,
        estado: result.data.uf
    };
    return endereco;
};

export async function cadastrarUsuario(razaoSocial, cnpj, nomeFantasia, email, telefone, cep, numero, complemento){
    
    const url = "https://marmita-solidaria-svc.herokuapp.com/restaurantes";
    const usuario = {
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        nomeFantasia: nomeFantasia,
        email: email,
        telefone: telefone,
        cep: cep,
        numero: numero,
        complemento: complemento
      };
    await axios.post(url, usuario)  
};