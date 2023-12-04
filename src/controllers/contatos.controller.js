import { Contatos } from '../models/contatos/Contatos.js';
import { ContatosLista } from '../models/contatos/contatoslist.js';

const lista = new ContatosLista();

 export const getContatos = (req, res) => {
     const contatos = lista.getContatos();
     if (contatos.length) {
         return res.status(404).send(
             contatos);
     }
     return res.status(200).send(
         { message: "Não há contatos cadastrados!" });
 };

export const getSContatosById = (req, res) => {

    const { id } = req.params;
    const contatos = lista.getContatosById(id);
    if (!contatos) {
        return res.status(404).send(
            { message: `O contato com id ${id} não encontrado!` }
        );
    }
    return res.status(200).send(
        contatos
    );
};

export const createContatos = (req, res) => {
    const { nome, email, telefone, quantity} = req.body;

      let errors = [];

    if (nome.length < 6) {
        errors.push("Name must have at least six characters");
    }
    if (email.length > 30) {
        errors.push("Type must have at least thirty characters");
    }
    if (telefone < 9 || quantity >= 11 || !Number.isInteger(telefone)){
        errors.push("Quantity must be a integer number between 9 and 11");
    }
    if (errors.length) {
        return res.status(400).send({ messages: errors });
    } else {
        const contatos = new Contatos(nome, email, telefone);
        lista.addContatos(contatos);
        return res.status(201).send({ message: "Contato criado com sucesso", contatos, });
    }

   
}

export const updateContatos = (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    let errors = [];

    if (nome.length < 6) {
        errors.push("Name must have at least six characters");
    }
    if (email.length > 30) {
        errors.push("Type must have at least thirty characters");
    }
    if (telefone < 9 || quantity >= 11 || !Number.isInteger(telefone)){
        errors.push("Quantity must be a integer number between 9 and 11");
    }
    if (errors.length) {
        return res.status(400).send({ messages: errors });
    }  else{
       
    const updatedContatos = lista.updateContatos(id, nome, email, telefone);
    return res.status(200).send({ message: "Contatos atualizados com sucesso!", updatedContatos, });
    }
   
   
};

export const deleteContatos = (req, res) => {
    const { id } = req.params;
    const contatos = lista.getContatosById(id);
    if (!contatos) {
        return res.status(404).send(
            { message: `Contato não encontrado!` }
        );
    }
    lista.removeContatos(id);

    return res.status(200).send(
        { message: "Contato deletado com sucesso!", contatos, }
    );
}