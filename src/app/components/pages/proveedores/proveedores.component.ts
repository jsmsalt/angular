import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit {
  public proveedores:Proveedor[] = [];
  constructor(private proveedoresService:ProveedoresService) { }

  ngOnInit() {
    this.proveedoresService.getProveedores().subscribe((response) => {
      if (response && response.length > 0) {
        this.proveedores = response;
      }
    });
  }

}
