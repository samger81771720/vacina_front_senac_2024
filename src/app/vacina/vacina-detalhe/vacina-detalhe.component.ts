import { Component } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { Pais } from '../../shared/model/pais';
import { Vacina } from '../../shared/model/vacina';
import { VacinaService } from '../../shared/service/vacina.service';
import { PessoaService } from '../../shared/service/pessoa.service';
import { PaisService } from '../../shared/service/pais.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-detalhe',
  //standalone: true,
 // imports: [],
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
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
export class VacinaDetalheComponent {

  public pessoas : Array<Pessoa> = new Array();
  public paises : Array<Pais> = new Array();
  public vacina : Vacina = new Vacina();
  public idVacina: number;

  constructor(
    private vacinaService : VacinaService,
    private pessoaService : PessoaService,
    private paisService : PaisService,
    private router: Router, /*COMPONENTE PARA FAZER ROTEAMENTO
    ENTRE AS TELAS */
    private route: ActivatedRoute, //COMPONENTE PARA CAPTURAR OS PARAMETROS DA URL
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
    this.router.navigate(['/vacina/listagem']);
  }

  public limparFormulario(): void {
    this.vacina = new Vacina();
  }

  public compareByIdPais(r1: any, r2: any): boolean{
    return r1 && r2 ? r1.id_Pais === r2.id_Pais : r1 === r2;
  }

  public compareByIdPessoa(r1: any, r2: any): boolean{
    return r1 && r2 ? r1.idPessoa === r2.idPessoa : r1 === r2;
  }
}
  /*Vou quebrar isso em partes para facilitar a compreensão:

r1 && r2: Esta parte verifica se tanto r1 quanto r2 são avaliados
como verdadeiros (não nulos). Isso é feito usando o operador
lógico &&, que retorna verdadeiro apenas se ambos os operandos
também forem verdadeiros. Se qualquer um deles for nulo, esta
expressão será avaliada como falsa.

?: Este é o operador ternário. Ele separa a expressão condicional
da expressão que será avaliada se a condição for verdadeira.

r1.idPessoa === r2.idPessoa: Esta é a expressão que será avaliada
se a condição anterior (r1 && r2) for verdadeira. Ela verifica se
os IDs das pessoas representadas por r1 e r2 são os mesmos, como
expliquei anteriormente. Se forem os mesmos, retorna true.

:: Este separa a expressão que será avaliada se a condição (r1 && r2)
for falsa daquela avaliada se a condição for verdadeira.

r1 === r2: Esta é a expressão que será avaliada se a
condição (r1 && r2) for falsa. Ela verifica se r1 e r2
são exatamente o mesmo objeto na memória.
Se forem o mesmo objeto, retorna true.

Então, em resumo, se tanto r1 quanto r2 não forem nulos,
a expressão verificará se os IDs das pessoas são iguais
(r1.idPessoa === r2.idPessoa). Se um ou ambos r1 e r2
forem nulos, a expressão verificará se os próprios
objetos são os mesmos (r1 === r2).*/




