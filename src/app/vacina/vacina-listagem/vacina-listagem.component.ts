import { Component, OnInit } from '@angular/core';

import { VacinaService } from '../../shared/service/vacina.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Pais } from '../../shared/model/pais';
import { Vacina } from '../../shared/model/vacina';
import { PaisService } from '../../shared/service/pais.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


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

  public vacinas : Array<Vacina> = new Array();
  public seletor : VacinaSeletor = new VacinaSeletor();
  public paises : Array<Pais> = new Array();

  constructor(
    private vacinaService : VacinaService,
    private paisService : PaisService,
    private router: Router, //COMPONENTE PARA FAZER ROTEAMENTO ENTRE AS TELAS
  ){

   }

  /*  ngOnInit(): void{ } - Utilizando sempre que um ou mais métodos precisem ser invocados ao
  abrir a tela relacionada ao método*/

  ngOnInit(): void{

    this.consultarTodasVacinas();
    /*Observe que o método pertence a essa classe "this."
    e está declarado logo abaixo."*/

    this.consultarTodosPaises();
  }


  public consultarTodosPaises(){
    this.paisService.consultarTodos().subscribe( /*
    subscribe() é usado para iniciar operações assíncronas
    e observar seus resultados ou erros.*/
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar países' + erro)
      }
    );
  }

  private consultarTodasVacinas(){
    this.vacinaService.consultarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar a lista de vacinas','','error');
      }
    )
  }

  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar todas as vacinas com o seletor.','','error');
      }
    );
  }

  public limpar(){
    this.seletor = new VacinaSeletor();
  }

  excluir(vacinaSelecionada: Vacina){
    Swal.fire({
      title: 'Deseja realmente excluir a vacina?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.vacinaService.excluir(vacinaSelecionada.idVacina).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir a vacina selecionada: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idVacinaSelecionada: number){
    this.router.navigate(['/vacina/cadastrar/', idVacinaSelecionada]);
  }

}
