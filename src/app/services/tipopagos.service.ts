import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Moneda } from '../models/moneda.model';
import { TipoPago } from '../models/tipopago.model';

@Injectable({providedIn: 'root'})
export class TipopagosService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getTipoPago(id:number) {
    return this.http.get<TipoPago>('http://localhost:8080/api/tipopagos/' + id);
  }

  getTipoPagos() {
    return this.http.get<TipoPago[]>('http://localhost:8080/api/tipopagos');
  }

  addTipoPago(tipopago:TipoPago) {
    return this.http.post<TipoPago[]>('http://localhost:8080/api/tipopagos', JSON.stringify(tipopago), this.httpOptions);
  }

  addTipoPagos(tipopagos:TipoPago[]) {
    return this.http.post<TipoPago[]>('http://localhost:8080/api/tipopagos', JSON.stringify(tipopagos), this.httpOptions);
  }
}