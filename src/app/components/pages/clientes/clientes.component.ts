import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  public clientes:Cliente[] = [];
  
  constructor(private clientesService:ClientesService) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe((response) => {
      if (response && response.length > 0) {
        this.clientes = response;
      }
    });
  }

}
