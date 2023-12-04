import { v4 as uuidv4 } from 'uuid';

export class Contatos {
    constructor(id, nome, email, telefone) {
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}