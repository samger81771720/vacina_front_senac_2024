import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aplicacao } from '../model/aplicacao';
import { AplicacaoSeletor } from '../model/seletor/aplicacao.seletor';

@Injectable({
  providedIn: 'root'
})

export class AplicacaoSevice{

  constructor(private HttpClient: HttpClient){ }

  private readonly API: string = 'http://localhost:8080/senac-backend-20241-AndreSampaio/rest/aplicacao';

  public consultarTodas(): Observable<Array<Aplicacao>>{
    return this.HttpClient.get<Array<Aplicacao>>(this.API + '/consultarTodas');
  }

  public consultarComSeletor(seletor: AplicacaoSeletor): Observable<Array<AplicacaoSeletor>>{
    return this.HttpClient.post<Array<AplicacaoSeletor>>(this.API + '/filtro', seletor);
  }

  public consultarPorId(idAplicacao: number): Observable<Aplicacao>{
    return this.HttpClient.get<Aplicacao>(this.API + '/' + idAplicacao);
  }

  public excluir(idAplicacao: number): Observable<boolean>{
    return this.HttpClient.delete<boolean>(this.API + '/' + idAplicacao);
  }

  public salvar(aplicacao: Aplicacao): Observable<Aplicacao>{
    return this.HttpClient.post<Aplicacao>(this.API, aplicacao);
  }

  public atualizar(aplicacao: Aplicacao): Observable<boolean>{
    return this.HttpClient.put<boolean>(this.API, aplicacao);
  }

}
