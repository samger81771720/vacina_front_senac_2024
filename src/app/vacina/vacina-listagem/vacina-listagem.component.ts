import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinaService } from '../../shared/service/vacina.service';

@Component({
  selector: 'app-vacina-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})

export class VacinaListagemComponent implements OnInit{

  public vacinas: Vacina[] = [];

  constructor(private cartaService: CartasService){}

  ngOnInit(): void{
    this.consultarTodasVacinas();
  }

  private consultarTodasVacinas(){
    this.VacinaService.listasTodas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar a lista de vacinas',erro)
      }
    )
  }

}
