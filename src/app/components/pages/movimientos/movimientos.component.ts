import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';
import { Movimiento } from 'src/app/models/movimiento.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html'
})
export class MovimientosComponent implements OnInit {

  public movimientos:Movimiento[] = [];
  public fields:any = {};
  public type:number = 1;

  constructor(private movimientosService:MovimientosService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      if (param.hasOwnProperty('id')) {
        if (param.id == "new") {
          this.type = 2
        } else {
          let id = parseInt(param.id);
          if (id > 0) {
            this.type = 3;
          }
        }
      };
    });
  }

  ngOnInit() {
    this.fields = {
      cliente: ['nombre', 'apellido'],
      proveedor: ['nombre'],
      tipoPago: ['descripcion'],
      moneda: ['descripcion'],
      subtipoMovimiento: ['descripcion'],
    };

    this.movimientosService.getMovimientos().subscribe((response) => {
      if (response && response.length > 0) {
        this.movimientos = response;
      }
    });
  }

  nuevoMovimiento(movimiento:Movimiento) {
    this.movimientos.push(movimiento);
    this.movimientos = this.movimientos.slice();
  }
}
