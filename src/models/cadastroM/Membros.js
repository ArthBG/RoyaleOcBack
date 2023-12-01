import { v4 as uuidv4 } from 'uuid';

export class Membros {
    constructor(nome, idade, cargo, foto, descricao) {
        this.id = uuidv4();
        this.nome = nome;
        this.idade = this.idade;
        this.idade = idade;
        this.cargo = cargo;
        this.foto = foto;
        this.descricao = descricao;
        

    }
 
}