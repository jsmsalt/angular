import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proveedor } from '../models/proveedor.model';

@Injectable({providedIn: 'root'})
export class ProveedoresService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getProveedor(id:number) {
    return this.http.get<Proveedor>('http://localhost:8080/api/proveedores/' + id);
  }

  getProveedores() {
    return this.http.get<Proveedor[]>('http://localhost:8080/api/proveedores');
  }

  addProveedor(proveedor:Proveedor) {
    return this.http.post<Proveedor[]>('http://localhost:8080/api/proveedores', JSON.stringify(proveedor), this.httpOptions);
  }

  addProveedores(proveedores:Proveedor[]) {
    return this.http.post<Proveedor[]>('http://localhost:8080/api/proveedores', JSON.stringify(proveedores), this.httpOptions);
  }
}