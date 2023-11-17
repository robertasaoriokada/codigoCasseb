export default class Registro {
  constructor(nome, idade, numero){
    this.nome = nome;
    this.idade = idade;
    this.numero = numero;
    this.montar_email();
    this.montar_numero();
    this.montar_username();
 }


montar_username(){
  this.username = this.nome.split("").reverse().join("");
}

 montar_email(){
  if(this.idade >= 25){
    this.email = this.nome + (2023 - this.idade) + "@cesupa.br";
    return;
  } 
  let x = "";
  for(let i = 0; i < this.nome.length; i++){
    if(this.nome[i] != "a" && this.nome[i] != "e" && this.nome[i] !="i" && this.nome[i] != "o" && this.nome[i]!="u"){
      x += this.nome[i];
    }
  }
  this.email = x + "@argo.br";
 }

 montar_numero() {
  if(this.numero.length == 8){
    let a = this.numero.substring(0, 4);
    let b = this.numero.substring(4, 9);
    this.numero = "091" + a + "-" + b;
    return;
  }
  if(this.numero.length == 7){
    let a = this.numero.substring(0, 3);
    let b = this.numero.substring(3, 8);
    this.numero = "0919" + a + "-" + b;
    return;
  }
  this.numero = "(###)####-####";
 }
}
