import { Vacina } from "./vacina";

export interface Aplicacao{
  idAplicacao: number;
	idPessoa: number;
	vacinaAplicada: Vacina;
	dataAplicacao: Date;
	avaliacaoReacao: number;
}
