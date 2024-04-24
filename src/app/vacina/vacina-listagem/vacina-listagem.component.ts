import { Component, OnInit } from '@angular/core';

import { VacinaService } from '../../shared/service/vacina.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { Vacina } from '../../shared/model/vacina';
import { PaisService } from '../../shared/service/pais.service';
import { PessoaService } from '../../shared/service/pessoa.service';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})

/*O método ngOnInit() em Angular é chamado automaticamente
quando um componente:
- É inicializado;
- É usado para realizar tarefas de inicialização, como definir
variáveis, buscar dados de serviços ou APIs, e configurar observables.

É um momento chave para preparar o estado inicial do componente.
*/
export class VacinaListagemComponent implements OnInit{

  constructor(
    private vacinaService : VacinaService,
    private paisService : PaisService,
    private pessoaService : PessoaService
  ){

  }

  /*Na linha abaixo foi criada uma variável chamada vacinas para a
  classe VacinaListagemComponent que é na verdade um array do tipo
  Vacina(ou seja da classe Vacina)*/
  public vacinas : Array<Vacina> = new Array();
  public seletor : VacinaSeletor = new VacinaSeletor();
  public paises : Array<Pais> = new Array();
  public pessoas : Array<Pessoa> = new Array();

  ngOnInit(): void{

    this.consultarTodasVacinas();
    /*Observe que o método pertence a essa classe "this."
    e está declarado logo abaixo."*/

    this.consultarTodasPessoas();

    this.paisService.consultarTodos().subscribe( /*
    subscribe() é usado para iniciar operações assíncronas
    e observar seus resultados ou erros.*/
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar países' + erro)
      }
    );
  }

  private consultarTodasVacinas(){
    this.vacinaService.consultarTodas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar a lista de vacinas',erro)
      }
    )
  }

  private consultarTodasPessoas(){
    this.pessoaService.consultarTodos().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.error('Erro ao consultar a lista de pessoas',erro)
      }
    )
  }

  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas com o seletor.' + erro);
      }
    );
  }

  public limpar(){
    this.seletor = new VacinaSeletor();
  }

}
