import { Contatos } from '../models/contatos/Contatos.js';
import { ContatosLista } from '../models/contatos/ContatosList.js';

const lista = new ContatosLista();

 export const getContatos = (req, res) => {
     const contatosAll = lista.getContatos();
     if (contatosAll.length) {
         return res.status(200).send({
            contatos: contatosAll
          });
     }
    }
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
    let { nome, email, telefone } = req.body;

    let errors = [];

    const telefoneQuantidade = telefone.toString().length;
    if ((telefoneQuantidade >= 9 || telefoneQuantidade <= 11) == false){
        errors.push("Number must be a integer number between 9 and 11");
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
    const contatos = lista.updatedContato(nome, email, telefone, id)
    if(contatos){
        return res.status(200).send({ contatos })
    } else{
        return res.status(404).send({message: `O contato com id ${id} não foi editado!`})
    }


}

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