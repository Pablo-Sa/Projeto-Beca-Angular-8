import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, map, take, catchError } from 'rxjs/operators';
import { Curso } from './cursoModel';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private serverAPI: string = `${environment.API}/cursos`;
  constructor(private http: HttpClient) { }


  getList(){
    return this.http
    .get<Curso[]>(this.serverAPI)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }

  getById(id: number){
    return this.http
    .get<Curso>(`${this.serverAPI}/${id}`)
    .pipe(
      take(1)
    );
  }

  create(newCurso){
    return this.http
    .post<Curso>(this.serverAPI, newCurso)
    .pipe(
      take(1)
    );
  }

  delete(curso){
    return this.http
    .delete<Curso>(`${this.serverAPI}/${curso.id}`)
    .pipe(
      take(1)
    );
  }

  updateCurso(curso: Curso){
    return this.http
    .put<Curso>(`${this.serverAPI}`, curso)
    .pipe(
      take(1)
    );
  }
}

