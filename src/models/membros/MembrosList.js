

export class MembrosList {
    constructor() {
        this.membros = [];
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

