export class Contatos {
    constructor( nome, email, telefone,comentario) {
        this.id =this.generateId();
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }
    generateId() {
        return Math.floor(Math.random()*100020);
    }
}