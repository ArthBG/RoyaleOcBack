import { Membros } from "../models/membros/Membros.js";
import { MembrosList } from "../models/membros/MembrosList.js";

const listMembros = new MembrosList();

//pegar todos os membros
export const getMembros = (req, res) => {
    const { nome, cargo } = req.query;

    //filtros
    const filtered = [];
    if (nome) {
        const membro = listMembros.getMembroByName(nome);
        if (membro) {
            filtered.push(membro);
        }
    }
    if (cargo) {
        const membro = listMembros.getMembroByCargo(cargo);
        if (membro) {
            filtered.push(membro);
        }
    }
    else {
        return res.status(200).send({ total: listMembros.getMembrosLength(), membros: listMembros.getAllMembros() });
    }
}


//pegar membro por id
export const getMembroByID = (req, res) => {
    const { id } = req.params;
    const membro = listMembros.getMembroByID(id);
    if (membro) {
        return res.status(200).send(membro);
    }
    else {
        return res.status(404).send({ message: `Membro ${id} não encontrado` });
    }
}

//criar membro + regras de negocio
export const createMembro = (req, res) => {
    let { nome, idade, cargo, foto, descricao } = req.body;
    const erros = [];
    
    
    const isUrlValida = (foto) => {
        const regex = /(http(s?):)([/|.|\w|\s|-])*\.(jpg|gif|png)/g;
        return regex.test(foto);
    } 

    if (!nome || !idade || !cargo || !foto || !descricao) {
        return res.status(400).send(
            { message: "Todos os campos são obrigatórios" });
    }

    if (nome.length > 20) {
        erros.push("O nome deve ter no máximo 20 caracteres");
    }

    if (idade < 15) {
        erros.push("A idade deve ser maior que 15");
    }
    if (cargo.length > 20) {
        erros.push("O cargo deve ter no máximo 20 caracteres");
    }
    if (descricao.length > 100) {
        erros.push("A descrição deve ter no máximo 100 caracteres");
    }
    if(!isUrlValida(foto)){
        erros.push({ message: "Imagem da roupa não pode ser diferente de png, gif, jpg, jpeg!" });
    }
    if (erros.length) {
        return res.status(400).send({ message: `Corrija, Voce tem ${erros.length} erro(s)`, erros });
    }


    const membro = new Membros(nome, idade, cargo, foto, descricao);


    listMembros.addMembro(membro);

    return res.status(201).send({ message: "Membro adicionado com sucesso! Bem-Vindo(a)!", membro });
}


//atualizar membro
export const atualizarMembro = (req, res) => {
    const { id } = req.params;


    let { nome, idade, cargo, foto, descricao } = req.body;
    const erros = [];

    if (!nome || !idade || !cargo || !foto || !descricao) {
        return res.status(400).send(
            { message: "Todos os campos são obrigatórios" });
    }
    if (nome.length > 20) {
        erros.push("O nome deve ter no máximo 20 caracteres");
    }
    if (idade < 15) {
        erros.push("A idade deve ser maior que 15");
    }
    if (cargo.length > 20) {
        erros.push("O cargo deve ter no máximo 20 caracteres");
    }
    if (descricao.length > 100) {
        erros.push("A descrição deve ter no máximo 100 caracteres");
    }
    if(foto!= "jpg" && foto != "png" && foto != "gif" && foto != "jpeg" && foto != "webp"){
        erros.push("A URL da foto é inválida");
    }
    if (erros.length > 0) {
        return res.status(400).send({ message: `Corrija, Voce tem ${erros.length} erro(s)`, erros });
       
    }else{
        const atualizarMembro = listMembros.updateMembro(nome, idade, cargo, foto, descricao, id);
        return res.status(200).send({ message: "membro atualizado com sucesso", atualizarMembro });
    }

}

//delete membro
export const deleteMembro = (req, res) => {
    const { id } = req.params;

    const membro = listMembros.getMembroByID(id);

    if (!membro) {
        return res.status(404).send({ message: `Membro ${id} não encontrado` });
    }

    listMembros.removeMembro(id);
    return res.status(200).send({ message: "Membro removido com sucesso!" });
}


