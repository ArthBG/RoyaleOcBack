export class Membros {
    constructor(nome, idade, cargo, foto, descricao) {
        this.id = this.generateId();
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.foto = foto;
        this.descricao = descricao;
        

    }
    generateId(){
        return Math.floor(Math.random() * 100020);
    }
 
}