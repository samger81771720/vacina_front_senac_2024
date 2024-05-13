import { Component } from '@angular/core';
import { Montadora } from '../../shared/model/montadora';
import { MontadoraService } from '../../shared/service/montadora.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carros-montadoras',
  templateUrl: './carros-montadoras.component.html',
  styleUrl: './carros-montadoras.component.scss'
})
export class CarrosMontadorasComponent {

  public montadora : Montadora = new Montadora();

  public listaDeMontadoras : Array<Montadora> = new Array();

  public totalEstoqueDeCarros: number;

  constructor(
    private montadoraService : MontadoraService,
    // private router: Router, //COMPONENTE PARA FAZER ROTEAMENTO ENTRE AS TELAS
  ){

   }

  ngOnInit(): void{
    this.consultarTodasMontadoras();
  }

  private consultarTodasMontadoras(){
    this.montadoraService.consultarTodas().subscribe(
      (resultado) => {
        this.listaDeMontadoras = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar a lista de montadoras','','error');
      }
    )
  }

  public pesquisar() {
    if (!this.montadora.id) {
        Swal.fire('Selecione uma montadora.', '', 'error');
    } else{
      this.montadoraService.consultarEstoqueCarros(this.montadora.id).subscribe(
        (resultado) => {
            this.totalEstoqueDeCarros = resultado;
        },
        (erro) => {
            Swal.fire('Erro ao consultar o estoque de carros.', erro.error.mensagem, 'error');
        }
    );
    }
  }

  public limpar(){
    this.montadora = new Montadora();
  }

  public compareById(r1: any, r2: any): boolean{
    return r1 && r2 ? r1.id_Pais === r2.id_Pais : r1 === r2;
  }
}
