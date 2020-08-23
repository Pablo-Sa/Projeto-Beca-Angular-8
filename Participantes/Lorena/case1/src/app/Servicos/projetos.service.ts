import { environment } from './../../environments/environment';
import { Cadastro } from './../projeto';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private readonly API = `${environment.API}Projetos`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Cadastro[]>(this.API);
  }

  create(cadastro){
    return this.http.post(this.API, cadastro).pipe(take(1));
  }

}
