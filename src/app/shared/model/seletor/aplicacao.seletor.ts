import { BaseSeletor } from "./base.seletor";

  export class AplicacaoSeletor extends BaseSeletor{

    vacinaUsadaNaAplicacao: string;
    dataInicialDaAplicacaoDaVacina: Date;
    dataFinalDaAplicacaoDaVacina: Date;
    avaliacaoReacaoVacina: number;
    pessoaQueRecebeu: number;

  }
