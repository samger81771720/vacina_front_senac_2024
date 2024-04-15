import { Pais } from "./pais";

  export interface Pessoa{
    idPessoa: number;
	  tipo: number;
	  nome: string;
	  dataNascimento: Date;
	  sexo: string;
  	cpf: string;
    pais: Pais;
  }
