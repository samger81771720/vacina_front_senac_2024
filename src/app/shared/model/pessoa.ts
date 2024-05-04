import { Pais } from "./pais";

  export class Pessoa{
    idPessoa: number;
    nome: string;
	  tipo: number;
	  dataNascimento: Date;
	  sexo: string;
  	cpf: string;
    pais: Pais;
  }
