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


    updatedContato(nome, email, telefone, comentario, id){

        const contato = this.getContatosById(id);
        if(!contato) return;
        if(contato){
          contato.nome = nome;
          contato.email = email;    
          contato.telefone = telefone;
          contato.comentario = comentario;
        }
        return contato;
    }


}