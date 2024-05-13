import { CarroService } from '../../shared/service/carro.service';
import { CarroSeletor } from './../../shared/model/seletor/carro.seletor';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Carro } from '../../shared/model/carro';


@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrl: './carros-lista.component.scss'
})
export class CarrosListaComponent {

  public seletor : CarroSeletor = new CarroSeletor();
  public carros : Array<Carro> = new Array();

  constructor(
    private carroService : CarroService,
    private router: Router, //COMPONENTE PARA FAZER ROTEAMENTO ENTRE AS TELAS
  ){

   }

  ngOnInit(): void{

  }

  public pesquisar(){
    this.carroService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.carros = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao buscar os carros com o seletor.','','error');
      }
    );
  }

  public limpar(){
    this.seletor = new CarroSeletor();
  }

}
