import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/Operators';
import { Cursos } from './../models/cursos';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  mensagem: string;
  tipoMensagem: string;

  constructor(private http: HttpClient) { }

  listCursos(): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(environment.API);
  }

  saveCurso(curso: Cursos){
    return this.http.post(environment.API, curso);
  }

  getCurso(id): Observable<Cursos>{
    return this.http.get<Cursos>(`${environment.API}/${id}`);
  }

  editarCurso(curso: Cursos){
    const url = `${environment.API}/${curso.id}`
    return this.http.put(url, curso).pipe(take(1));
  }

  deletarCurso(id){
    return this.http.delete(`${environment.API}/${id}`).pipe(take(1));
  }

}
