import { v4 as uuidv4 } from 'uuid';
// classe que representa o modelo de dados do Sobre
class Sobre {
    constructor(nome, idade, descricao, imagem) {
        this.id = uuidv4();
        this.nome = nome;
        this.idade = idade;
        this.descricao = descricao;
        this.imagem = imagem;

    }
}
// classe que representa a lista de Sobre
export class ListaMembros {
    constructor() {
        this.membros = [];
    }
    addMembro(nome, idade, descricao, imagem) {
        const novoMembro = new Sobre(nome, idade, descricao, imagem);
        this.membros.push(novoMembro);
    }
    pegarPorId(id) {
        return this.membros.find(membro => membro.id == id);
    }
    atualizarMembro(id, nome, idade, descricao, imagem) {
        this.membros = this.membros.map((membro) => {
            if (membro.id == id) {
                membro.nome = nome;
                membro.idade = idade;
                membro.descricao = descricao;
                membro.imagem = imagem;
            }
            return membro;
        });
        return this.pegarPorId(id);
    }
}
export default Sobre;
