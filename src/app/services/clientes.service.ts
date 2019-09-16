import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';

@Injectable({providedIn: 'root'})
export class ClientesService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getCliente(id:number) {
    return this.http.get<Cliente>('http://localhost:8080/api/clientes/' + id);
  }

  getClientes() {
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  addCliente(cliente:Cliente) {
    return this.http.post<Cliente[]>('http://localhost:8080/api/clientes', JSON.stringify(cliente), this.httpOptions);
  }

  addClientes(clientes:Cliente[]) {
    return this.http.post<Cliente[]>('http://localhost:8080/api/clientes', JSON.stringify(clientes), this.httpOptions);
  }
}