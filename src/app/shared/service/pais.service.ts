import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pais } from "../model/pais";

/*

""" @Injectable() """"   É um decorador em Angular usado para permitir
a injeção de dependência em uma classe.

""" providedIn: 'root' """ Dentro do decorador @Injectable() indica
ao Angular que o serviço deve ser injetado globalmente no nível da raiz
da aplicação.

""" readonly """ É uma declaração de uma constante em ts

""" consultarTodos """ É um método público da classe PaisService que retorna
um Observable(Observable em Angular é uma classe usada para trabalhar com dados
assíncronos, permitindo observar e manipular valores ao longo do tempo, como
respostas de solicitações HTTP ou eventos de temporização.) de uma matriz de
objetos do tipo Pais.

""" constructor(private HttpClient: HttpClient) """ Nessa linha, está sendo
definido o construtor da classe PaisService. Ele recebe um parâmetro httpClient
do tipo HttpClient, que é uma instância necessária para realizar solicitações
HTTP na aplicação Angular. Essa técnica é chamada de "injeção de dependência".

*/

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  constructor(private HttpClient: HttpClient) {

  }

  private readonly API: string = "http://localhost:8080/senac-backend-20241-AndreSampaio/rest/pais";

  public consultarTodos(): Observable<Array<Pais>>{
    return this.HttpClient.get<Array<Pais>>(this.API + "/consultarTodos");
  }

}
