
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

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
export class VacinaService {

  constructor(private httpClient: HttpClient) {
    /*

       O objeto HttpClient é um serviço Angular
    usado para realizar requisições HTTP. Ele
    permite enviar e receber dados de servidores
    remotos via métodos como GET, POST, PUT e
    DELETE, facilitando a comunicação com APIs
    RESTful.

    O HttpClient é declarado dentro do construtor
    da classe VacinaService para habilitar a injeção
    de dependência, que permite que o Angular forneça
    uma instância desse serviço automaticamente quando
    o VacinaService for instanciado. Isso promove a
    reutilização de código e facilita a testabilidade
    e manutenção do serviço. Observe que ele é importado
    junto com outros objetos na parte superior do arquivo.

    */
  }

  private readonly API: string = 'http://localhost:8080/senac-backend-20241-AndreSampaio/rest/vacina';

  public consultarTodas(): Observable<Array<Vacina>>{
    return this.httpClient.get<Array<Vacina>>(this.API + '/consultarVacinas');
  }

  public consultarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>>{
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor);
  }

  public consultarPorId(idVacina: number): Observable<Vacina>{
    return this.httpClient.get<Vacina>(this.API + '/' + idVacina);
  }

  public excluir(idVacina: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.API + '/' + idVacina);
  }

  public salvar(vacina: Vacina): Observable<Vacina>{
    return this.httpClient.post<Vacina>(this.API, vacina);
  }

  public atualizar(vacina: Vacina): Observable<boolean>{
    return this.httpClient.put<boolean>(this.API, vacina);
  }
}
