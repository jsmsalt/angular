import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subtipo } from '../models/subtipo.model';

@Injectable({providedIn: 'root'})
export class SubtiposService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getSubtipo(id:number) {
    return this.http.get<Subtipo>('http://localhost:8080/api/subtipos/' + id);
  }

  getSubtipos() {
    return this.http.get<Subtipo[]>('http://localhost:8080/api/subtipos');
  }

  addSubtipo(subtipo:Subtipo) {
    return this.http.post<Subtipo[]>('http://localhost:8080/api/subtipos', JSON.stringify(subtipo), this.httpOptions);
  }

  addSubtipos(subtipos:Subtipo[]) {
    return this.http.post<Subtipo[]>('http://localhost:8080/api/subtipos', JSON.stringify(subtipos), this.httpOptions);
  }
}