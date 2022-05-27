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

    const response = await axios.post(url, usuario)
    return {id: response.data}
};

export async function inserirMarmita(restauranteId, dataFeitura, descricao, observacao, quantidade){
    
    const url = "https://marmita-solidaria-svc.herokuapp.com/marmitas";
    const marmita = {
        restauranteId: restauranteId,
        dataFeitura: dataFeitura,
        descricao: descricao,
        observacao: observacao,
        quantidade: quantidade
      };
    await axios.post(url, marmita)  
};

export async function findByEmail(email){
    
    const url =`https://marmita-solidaria-svc.herokuapp.com/restaurantes/email/${email}`;
    const response = await axios.get(url)

    const usuario = {
        id: response.data.id,
        razaoSocial: response.data.razaoSocial,
        cnpj: response.data.cnpj,
        nomeFantasia: response.data.nomeFantasia,
        email: response.data.email,
        telefone: response.data.telefone
    };
    return usuario;
};