import { Contatos } from '../models/Contato/Contatos.js';
import { ContatosList } from '../models/Contato/ContatosList.js';

const lista = new ContatosList();
export const getContatos = (req, res) => {
    const contatos = lista.getAllContatoss();

    const filtrado = [];


    const { nome, email, telefone } = req.query;

    if (nome) {
        const contatos = lista.getByNome(nome);
        if (nome.length) {
            filtrado.push(contatos)
        } else {
            return res.status(200).send({
                message: `não há pessoas cadastradas do tipo ${nome}`
            });

        }
    }
    if (email) {
        const contatos = lista.getByEmail(email);
        if (contatos.length) {
            filtrado.push(contatos)
        }
        return res.status(200).send({
            message: `não há emails cadastrados nesse endereço ${email}`
        });
    }
    if (telefone) {
        const contatos = lista.getByTelefone(telefone);
        if (contatos.length) {
            filtrado.push(contatos)
        }


        if (telefone.length < 8 || telefone.length > 10) {
            return res.status(200).send({
                message: "número de telefone inválido"
            });
        }
        return res.status(200).send({
            message: `não há telefones cadastrados nesse número  ${telefone}`
        });
    }

    
}

export const getContatosById = (req, res) => {
    const { id } = req.params;


    console.log(id);

    const contato = lista.getContatos(id);

    if (!contato) {
        return res.status(404).send({
            message: "Contato não encontrado",
        });
    }
    return res.status(200).send({
        message: `contato com id ${id}`
    });
}

export const createContato = (req, res) => {
    const { nome, email, telefone,} = req.body;



    if (!nome || !email || !telefone) {
        return res.status(400).send({
            message: "missing fields"
        });
    }
    if (nome.length < 6) {
        return res.status(400).send({
            message: "O Nome tem que ter no minímo 6 caracteres"
        });
    } else if (nome.length > 40) {
        return res.status(400).send({
            message: "O Nome tem que ter no máximo 40 caracteres"
        });
    } if (email.length > 40) {
        return res.status(400).send({
            message: "O email é de no máximo 40 caracteres"
        });
    } else if (email.length < 20) {
        return res.status(400).send ({
            message: "O email é de no mínimo 20 caracteres"
        });
    } i
    if (telefone.length < 8 || telefone.length > 10) {
        return res.status(200).send({
            message: "número de telefone inválido"
        });
    }
    }

    const contato = new Contatos (nome, email, telefone);

    lista.addContato(contato);

    return res.status(200).send({
        message: `Create contato ${nome} email ${email} telefone ${telefone}`
    });

    export const deleteContatos = (req, res) => {
        const { id } = req.params;
    
        const contato = lista.getContatos(id);
    
        if (!contato) {
            return res.status(404).send({
                message: "..."
            })
        }
    
        lista.removeContatos(id)
    
        return res.status(200).send({
            message: `Delete contato ${id}`
        });
    }

    export const updateContatos = (req, res) => {
        const { id } = req.params;
        const { nome, email, telefone } = req.body;
    
        if (!nome || !email || !telefone) {
            return res.status(400).send({
                message: "missing fields"
            });
        }
    
        const contato = lista.getContatos(id);
    
        if (!contato) {
            return res.status(404).send({
                message: "contato não encontrado",
            });
        }
    
        lista.updateContatos(id, nome, email, telefone)
    
    
    
        return res.status(200).send({
            message: `Update contato ${nome} email ${email} telefone ${telefone}`
        });
    }