import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';
import { CarroSeletor } from '../model/seletor/carro.seletor';
import { Carro } from '../model/carro';

/*@Injectable({ providedIn: 'root' }) define que o serviço decorado
estará disponível globalmente em toda a aplicação Angular. Isso é
feito definindo providedIn como 'root', o que significa que o serviço
será injetado na raiz do aplicativo Angular. Isso é útil quando você
quer que um serviço seja compartilhado entre vários componentes ou
módulos sem precisar importá-lo repetidamente.
*/
@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) {

  }

  private readonly API: string = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro';

  public consultarComSeletor(seletor: CarroSeletor): Observable<Array<Carro>>{
    return this.httpClient.post<Array<Carro>>(this.API + '/filtro', seletor);
  }

}
