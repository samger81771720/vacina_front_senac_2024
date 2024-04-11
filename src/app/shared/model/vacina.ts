import { Pessoa } from "./Pessoa";
import { Pais } from "./pais";

export interface Vacina{
  idVacina: number;
  nome: string;
  pesquisadorResponsavel: Pessoa;
  estagioDaVacina: number;
	dataInicioPesquisa: Date;
  pais: Pais;
	mediaDaVacina: number;
}
