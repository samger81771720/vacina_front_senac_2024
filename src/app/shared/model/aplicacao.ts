import { Pessoa } from "./pessoa";
import { Vacina } from "./vacina";

export class Aplicacao{
  idAplicacao: number;
	idDaPessoaQueRecebeu: number;
	idDaVacinaAplicada: Vacina;
	dataAplicacao: Date;
	avaliacaoReacao: number;
}
