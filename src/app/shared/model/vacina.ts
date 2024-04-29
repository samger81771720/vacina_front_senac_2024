import { Pessoa } from "./pessoa";
import { Pais } from "./pais";

export class Vacina{
  idVacina: number;
  nome: string;
  pesquisadorResponsavel: Pessoa;
  estagioDaVacina: number;
	dataInicioPesquisa: Date;
  pais: Pais;
	mediaDaVacina: number;
}
