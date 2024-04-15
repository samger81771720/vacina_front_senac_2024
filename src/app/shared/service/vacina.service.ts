
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/senac-backend-20241-AndreSampaio/rest/vacina";

  //
  public consultarTodas(): Observable<Array<Vacina>>{
    return this.httpClient.get<Array<Vacina>>(this.API + "/consultarVacinas");
  }

  public consultarPorId(id: number): Observable<Vacina>{
    return this.httpClient.get<Vacina>(this.API + "/" + id);
  }
}
