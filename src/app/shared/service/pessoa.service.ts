import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from '../model/pessoa';
import { PessoaSeletor } from "../model/seletor/pessoa.seletor";

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor(private httpClient: HttpClient){

  }

  private readonly API: string = 'http://localhost:8080/senac-backend-20241-AndreSampaio/rest/pessoa';

  public consultarTodos(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/consultarPessoas');
  }

  public consultarTodosPesquisadores(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/pesquisadores');
  }

  public consultarPorId(idPessoa: number): Observable<Pessoa>{
    return this.httpClient.get<Pessoa>(this.API + '/' + idPessoa);
  }

  public excluir(idPessoa: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.API + '/' + idPessoa);
  }

  public salvar(pessoa: Pessoa): Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.API, pessoa);
  }

  public atualizar(pessoa: Pessoa): Observable<boolean>{
    return this.httpClient.put<boolean>(this.API, pessoa);
  }

  public consultarComSeletor(seletor: PessoaSeletor): Observable<Array<Pessoa>>{
    return this.httpClient.post<Array<Pessoa>>(this.API + '/filtro', seletor);
  }

  public contabilizarTotalPessoas(seletor: PessoaSeletor): Observable<number> {
    return this.httpClient.post<number>(this.API + '/contabilizar-total-registros', seletor)
  }

  contabilizarTotalPaginas(seletor: PessoaSeletor): Observable<number> {
    return this.httpClient.post<number>(this.API + '/contabilizar-total-paginas', seletor);
  }

}
