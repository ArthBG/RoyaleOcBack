import { integrantes } from "../../data/membros.js";
import { Membros } from "./Membros.js";

export class MembrosList {
    constructor() {
        this.membros = [];
        const membros = integrantes.map(membro => new Membros(membro.nome, membro.idade, membro.cargo, membro.foto, membro.descricao));
        this.membros.push(...membros);
        console.log(this.membros);
    }
    addMembro(membro) {
        this.membros.push(membro);
    }

    getMembroByID(id) {
        return this.membros.find(membro => membro.id == id);
    }

    getAllMembros() {
        return this.membros;
    }

    getMembrosLength() {
        return this.membros.length;
    }
    getMembroByName(nome) {
        return this.membros.find(membro => membro.nome == nome);
    }

    getMembroByCargo(cargo) {
        return this.membros.find(membro => membro.cargo == cargo);
    }

    removeMembro(id) {
        this.membros = this.membros.filter(membro => membro.id !== id);
    }
n
    updateMembro(nome, idade, cargo, foto, descricao, id) {
        const membro = this.getMembroByID(id);
        if (!membro) return;
        if (membro) {
            membro.nome = nome;
            membro.idade = idade;
            membro.cargo = cargo;
            membro.foto = foto;
            membro.descricao = descricao;
        }
        return membro;
    }
}

