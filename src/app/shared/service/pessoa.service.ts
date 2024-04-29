import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor(private HttpClient: HttpClient){
    
  }

  private readonly API: string = "http://localhost:8080/senac-backend-20241-AndreSampaio/rest/pessoa";

  public consultarTodos(): Observable<Array<Pessoa>>{
    return this.HttpClient.get<Array<Pessoa>>(this.API + "/consultarPessoas");
  }

  public consultarTodosPesquisadores(): Observable<Array<Pessoa>>{
    return this.HttpClient.get<Array<Pessoa>>(this.API + "/pesquisadores");
  }

}
