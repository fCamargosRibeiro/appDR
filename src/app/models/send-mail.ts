export class SendMail {

    constructor(nome = '', email = '', telefone = '', assunto = '', mensagem = '') {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.assunto = assunto;
        this.mensagem = mensagem;
    }

    nome: String;
    email: String;
    telefone: String;
    assunto: String;
    mensagem: String;
}
