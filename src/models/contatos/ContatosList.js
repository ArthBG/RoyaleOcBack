export class ContatosLista{
    constructor(){
        this.contatos = [];
    }

    addContatos(contatos){
        this.contatos.push(contatos);
    }

    getContatosById(id){
        return this.contatos.find(contatos => contatos.id == id);
    }

    getContatos(){
        return this.contatos;
    }

    removeContatos(id){
        this.contatos = this.contatos.filter(contatos => contatos.id != id);
    }

    updateContatos(id, nome, email, telefone){
        this.contatos = this.contatos.map(contatos => {
            if(contatos.id == id){
                contatos.nome = nome;
                contatos.email = email;
                contatos.telefone = telefone;
            }
            return contatos;
        });
        return this.getContatosById(id);
    }
}