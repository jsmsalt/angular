import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Moneda } from '../models/moneda.model';

@Injectable({providedIn: 'root'})
export class MonedasService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getMoneda(id:number) {
    return this.http.get<Moneda>('http://localhost:8080/api/monedas/' + id);
  }

  getMonedas() {
    return this.http.get<Moneda[]>('http://localhost:8080/api/monedas');
  }

  addMoneda(moneda:Moneda) {
    return this.http.post<Moneda[]>('http://localhost:8080/api/monedas', JSON.stringify(moneda), this.httpOptions);
  }

  addMonedas(monedas:Moneda[]) {
    return this.http.post<Moneda[]>('http://localhost:8080/api/monedas', JSON.stringify(monedas), this.httpOptions);
  }
}