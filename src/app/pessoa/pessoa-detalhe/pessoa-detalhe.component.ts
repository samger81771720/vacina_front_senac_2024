import { Component } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { Pais } from '../../shared/model/pais';
import { PessoaService } from '../../shared/service/pessoa.service';
import { PaisService } from '../../shared/service/pais.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './pessoa-detalhe.component.html',
  styleUrl: './pessoa-detalhe.component.scss'
})

export class PessoaDetalheComponent {

  public pessoa : Pessoa = new Pessoa();
  public paises : Array<Pais> = new Array();
  idPessoa: number;

  constructor(
    private pessoaService : PessoaService,
    private paisService : PaisService,
    private router: Router, /*COMPONENTE PARA FAZER ROTEAMENTO
    ENTRE AS TELAS */
    private route: ActivatedRoute, //COMPONENTE PARA CAPTURAR OS PARAMETROS DA URL
  ){

  }

  ngOnInit(): void {

    this.consultarTodosOsPaises();

    this.route.params.subscribe(
      (params) =>{
        this.idPessoa = params['idPessoa'];
        if(this.idPessoa) {
          this.consultarPessoaPorId();
        }
      }
    )

  }


  private consultarTodosOsPaises(): void{
    this.paisService.consultarTodos().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a lista dos países','','error');
      }
    )
  }

  public consultarPessoaPorId(): void{
    this.pessoaService.consultarPorId(this.idPessoa).subscribe(
      (resultado) => {
        this.pessoa = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a pessoa no banco de dados para editá-la',erro,'error');
      }
    )
  }

  public salvar(): void{
    if(this.idPessoa){
      this.atualizar();
    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.pessoaService.salvar(this.pessoa).subscribe(
      (resultado) => {
        Swal.fire('Pessoa salva com sucesso!','', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a pessoa: ' + erro.error.mensagem, 'error');
      }
    );
  }

  public atualizar(): void {
    this.pessoaService.atualizar(this.pessoa).subscribe(
      (resultado) => {
        Swal.fire('Pessoa atualizada  com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao tentar atualizar a pessoa que foi editada' +erro.error.mensagem, 'error');
      }
    );
  }

  public voltar(): void {
    this.router.navigate(['/pessoa/listagem']);
  }

  public limparFormulario(): void {
    this.pessoa = new Pessoa();
  }

  public compareByIdPais(r1: any, r2: any): boolean{
    return r1 && r2 ? r1.id_Pais === r2.id_Pais : r1 === r2;
  }

  public compareByIdPessoa(r1: any, r2: any): boolean{
    return r1 && r2 ? r1.idPessoa === r2.idPessoa : r1 === r2;
  }

}
