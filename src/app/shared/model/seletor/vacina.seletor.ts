export class VacinaSeletor {
  nomePais: string;
  nomePesquisador: string;
  nomeVacina: string;
  dataInicioPesquisaSeletor: Date;
  dataFinalPesquisaSeletor: Date;

  constructor() {
    this.nomePais = '';
    this.nomePesquisador = '';
    this.nomeVacina = '';
    this.dataInicioPesquisaSeletor = new Date();
    this.dataFinalPesquisaSeletor = new Date();
  }
}
