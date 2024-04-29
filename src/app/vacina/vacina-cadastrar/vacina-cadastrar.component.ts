
import { Component } from '@angular/core';
import { VacinaService } from '../../shared/service/vacina.service';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoaService } from '../../shared/service/pessoa.service';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { Vacina } from '../../shared/model/vacina';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vacina-cadastrar',
  templateUrl: './vacina-cadastrar.component.html',
  styleUrl: './vacina-cadastrar.component.scss'
})

/*

export class VacinaCadastrarComponent {

  constructor()

}

Quando os objetos de serviço são criados fora do construtor
e atribuídos como propriedades da classe, eles se tornam
parte da instância específica da classe e podem ser acessados
e utilizados em qualquer parte da classe.

Por outro lado, quando os objetos de serviço são apenas
declarados como parâmetros do construtor e não são atribuídos
como propriedades da classe, eles ainda são parte da instância
do componente, mas não são propriedades específicas da classe.
Eles são apenas instâncias que são passadas para o construtor
pelo Angular como parte do processo de injeção de dependência.

As variáveis vacinas, pessoas e paises não são propriedades
da classe VacinaCadastrarComponent porque são apenas variáveis
locais dentro do construtor. Elas são utilizadas para armazenar
dados temporários e não fazem parte da estrutura permanente da
classe.
*/
export class VacinaCadastrarComponent {

  public pessoas : Array<Pessoa> = new Array();
  public paises : Array<Pais> = new Array();
  public vacina : Vacina = new Vacina();
  public idVacina: number;


  constructor(
    private vacinaService : VacinaService,
    private pessoaService : PessoaService,
    private paisService : PaisService,
    private router: Router, //COMPONENTE PARA FAZER ROTEAMENTO ENTRA AS TELAS
    private route: ActivatedRoute, //PEGAR OS PARAMETROS DA URL
  ){

  }

  ngOnInit(): void {

    this.consultarTodosOsPesquisadores();

    this.consultarTodosOsPaises();

    this.route.params.subscribe(
      (params) =>{
        this.idVacina = params['idVacina'];
        if(this.idVacina) {
          this.consultarVacinaPorId();
        }
      }
    )

  }

  public consultarTodosOsPesquisadores(){
    this.pessoaService.consultarTodosPesquisadores().subscribe( /*
    subscribe() é usado para iniciar operações assíncronas
    e observar seus resultados ou erros.*/
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a lista de pesquisadores','','error');
      }
    );
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

  public consultarVacinaPorId(): void{
    this.vacinaService.consultarPorId(this.idVacina).subscribe(
      (resultado) => {
        this.vacina = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar a vacina no banco de dados para editá-la',erro,'error');
      }
    )
  }

  public salvar(): void{
    if(this.idVacina){
      this.atualizar();
    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.vacinaService.salvar(this.vacina).subscribe(
      (resultado) => {
        Swal.fire('Vacina salva com sucesso!','', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a vacina: ' + erro.error.mensagem, 'error');
      }
    );
  }

  public atualizar(): void {
    this.vacinaService.atualizar(this.vacina).subscribe(
      (resultado) => {
        Swal.fire('Vacina atualizada  com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao tentar atualizar a vacina que foi editada' +erro.error.mensagem, 'error');
      }
    );
  }

  public voltar(): void {
    this.router.navigate(['/vacina']);
  }

  public limparFormulario(): void {
    this.vacina = new Vacina();
  }
}
