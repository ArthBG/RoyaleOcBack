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

<<<<<<< HEAD
    updatedContato(nome, email, telefone, comentario, id){
=======
    updatedContato(nome, email, telefone,comentario, id){
>>>>>>> b983d7fdcf2c550113b17e0e6e9125abd3a7bd3b
        const contato = this.getContatosById(id);
        if(!contato) return;
        if(contato){
          contato.nome = nome;
          contato.email = email;    
          contato.telefone = telefone;
          contato.comentario = comentario;
<<<<<<< HEAD
            
=======
        
>>>>>>> b983d7fdcf2c550113b17e0e6e9125abd3a7bd3b
        }
        return contato;
    }


}