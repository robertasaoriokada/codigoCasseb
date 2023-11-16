export default class Registro {
  constructor(nome, idade, contato) {
    this.nome = nome;
    this.idade = idade;
    this.contato = contato;

    this.montar_email();
  }

  montar_email() {
    if (this.idade >= 25) {
      let data_nasc = 2023 - this.idade;

      this.email = this.nome + data_nasc + "@cesupa.br";
    } else {
      let x = "";

      for (let i = 0; i < this.nome.length; i++) {
        if (
          this.nome[i] != "o" &&
          this.nome[i] != "a" &&
          this.nome[i] != "e" &&
          this.nome[i] != "i" &&
          this.nome[i] != "u"
        ) {
          x += this.nome[i];
        }
      }

      this.email = x + "@argo.br";
    }
  }
}
