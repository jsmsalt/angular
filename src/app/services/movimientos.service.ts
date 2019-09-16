import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movimiento } from '../models/movimiento.model';

@Injectable({providedIn: 'root'})
export class MovimientosService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getMovimiento(id:number) {
    return this.http.get<Movimiento>('http://localhost:8080/api/movimientos/' + id);
  }

  getMovimientos() {
    return this.http.get<Movimiento[]>('http://localhost:8080/api/movimientos');
  }

  addMovimiento(movimiento:Movimiento) {
    return this.http.post<Movimiento[]>('http://localhost:8080/api/movimientos', JSON.stringify(movimiento), this.httpOptions);
  }

  addMovimientos(movimientos:Movimiento[]) {
    return this.http.post<Movimiento[]>('http://localhost:8080/api/movimientos', JSON.stringify(movimientos), this.httpOptions);
  }
}