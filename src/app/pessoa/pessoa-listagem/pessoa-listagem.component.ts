import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../shared/service/pessoa.service';
import { Pessoa } from '../../shared/model/pessoa';
import Swal from 'sweetalert2';
import { PessoaSeletor } from '../../shared/model/seletor/pessoa.seletor';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { Router } from '@angular/router';
import { BaseSeletor } from '../../shared/model/seletor/base.seletor';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.scss'
})
export class PessoaListagemComponent implements OnInit{
  public pessoas : Array<Pessoa> = new Array();
  public seletor : PessoaSeletor = new PessoaSeletor();
  public paises : Array<Pais> = new Array();

  constructor(
    private pessoaService: PessoaService,
    private paisService : PaisService,
    private router: Router //COMPONENTE PARA FAZER ROTEAMENTO ENTRE AS TELAS
  ){

  }

  ngOnInit(): void {
    this.seletor.pagina = 1;
    this.seletor.limite = 5;
    this.pesquisar();
    this.consultarTodosPaises();
  }

  private consultarTodasPessoas(){
    this.pessoaService.consultarTodos().subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a lista de pessoas','','error');
      }
    );
  }

  private consultarTodosPaises(){
    this.paisService.consultarTodos().subscribe( /*
    subscribe() é usado para iniciar operações assíncronas
    e observar seus resultados ou erros.*/
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar todas os países com o seletor.','','error');
      }
    );
  }

  public pesquisar(){
    this.pessoaService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar todas as pessoas com o seletor.','','error');
      }
    );
  }

  public limpar(){
    this.seletor = new PessoaSeletor();
  }

  public excluir(pessoaSelecionada: Pessoa): void{
    Swal.fire({
      title: 'Deseja realmente excluir a pessoa?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.pessoaService.excluir(pessoaSelecionada.idPessoa).subscribe(
          resultado => {
            Swal.fire('Pessoa excluída com sucesso!','','success');
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir a pessoa selecionada: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public getTipoPessoa(tipo: Number): string{
    switch(tipo) {
      case 1:
        return 'Pesquisador';
      case 2:
        return 'Voluntário';
      case 3:
        return 'Público Geral';
      default:
        return '';
    }
  }

  public editar(idPessoaSelecionada: number){
    this.router.navigate(['/pessoa/cadastrar/', idPessoaSelecionada]);
  }

  public anterior() {
    this.seletor.pagina--;
    this.pesquisar();
  }

  public posterior(){
    this.seletor.pagina++;
    this.pesquisar();
  }

}
