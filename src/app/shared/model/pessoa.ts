import { Pais } from "./pais";

  export class Pessoa{
    idPessoa: number;
	  tipo: number;
	  nome: string;
	  dataNascimento: Date;
	  sexo: string;
  	cpf: string;
    pais: Pais;
  }
