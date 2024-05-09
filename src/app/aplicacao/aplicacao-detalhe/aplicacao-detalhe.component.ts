import { Component } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { VacinaService } from '../../shared/service/vacina.service';
import { PessoaService } from '../../shared/service/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../app.routes';
import Swal from 'sweetalert2';
import { Vacina } from '../../shared/model/vacina';
import { Aplicacao } from '../../shared/model/aplicacao';
import { AplicacaoSevice } from '../../shared/service/aplicacao.service';

@Component({
  selector: 'app-aplicacao-detalhe',
  templateUrl: './aplicacao-detalhe.component.html',
  styleUrl: './aplicacao-detalhe.component.scss'
})
export class AplicacaoDetalheComponent {

  public pessoas : Array<Pessoa> = new Array();
  public vacinas : Array<Vacina> = new Array();

  public pessoa : Pessoa = new Pessoa();
  public vacina : Vacina = new Vacina();
  public aplicacao : Aplicacao = new Aplicacao();

  constructor(
    private vacinaService : VacinaService,
    private pessoaService : PessoaService,
    private aplicacaoService : AplicacaoSevice,
    private Router: Router, /*COMPONENTE PARA FAZER ROTEAMENTO
    ENTRE AS TELAS */
    private routes: ActivatedRoute, //COMPONENTE PARA CAPTURAR OS PARAMETROS DA URL
  ){

  }

  ngOnInit(): void {
    this.consultarTodosAsPessoas();
    this.consultarTodosAsVacinas();
  }

  public consultarTodosAsPessoas(){
    this.pessoaService.consultarTodos().subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a lista de pessoas','','error');
      }
    );
  }

  public consultarTodosAsVacinas(){
    this.vacinaService.consultarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a lista de vacinas','','error');
      }
    );
  }

  public cadastrar(): void {
    this.aplicacaoService.salvar(this.aplicacao).subscribe(
      (resultado) => {
        Swal.fire('Aplicacao salva com sucesso!','', 'success');
        this.limparFormulario();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a aplicacão da vacina: ' + erro.error.mensagem, 'error');
      }
    );
  }

  public limparFormulario(): void {
    this.aplicacao = new Aplicacao();
  }

  public compareById(r1: any, r2: any): boolean{
    return r1 && r2 ? r1.idPessoa === r2.idPessoa : r1 === r2;
  }

}
