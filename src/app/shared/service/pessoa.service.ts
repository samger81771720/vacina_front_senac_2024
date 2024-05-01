import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from '../model/pessoa';
import { PessoaSeletor } from "../model/seletor/pessoa.seletor";

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor(private HttpClient: HttpClient){

  }

  private readonly API: string = 'http://localhost:8080/senac-backend-20241-AndreSampaio/rest/pessoa';

  public consultarTodos(): Observable<Array<Pessoa>>{
    return this.HttpClient.get<Array<Pessoa>>(this.API + '/consultarPessoas');
  }

  public consultarTodosPesquisadores(): Observable<Array<Pessoa>>{
    return this.HttpClient.get<Array<Pessoa>>(this.API + '/pesquisadores');
  }

  public consultarPorId(idPessoa: number): Observable<Pessoa>{
    return this.HttpClient.get<Pessoa>(this.API + '/' + idPessoa);
  }

  public excluir(idPessoa: number): Observable<boolean>{
    return this.HttpClient.delete<boolean>(this.API + '/' + idPessoa);
  }

  public salvar(pessoa: Pessoa): Observable<Pessoa>{
    return this.HttpClient.post<Pessoa>(this.API, pessoa);
  }

  public atualizar(pessoa: Pessoa): Observable<boolean>{
    return this.HttpClient.put<boolean>(this.API, pessoa);
  }

  public consultarComSeletor(seletor: PessoaSeletor): Observable<Array<Pessoa>>{
    return this.HttpClient.post<Array<Pessoa>>(this.API + '/filtro', seletor);
  }
}
