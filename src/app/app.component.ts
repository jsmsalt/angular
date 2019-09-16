import { Component, OnInit } from '@angular/core';
import { MonedasService } from './services/monedas.service';
import { Moneda } from './models/moneda.model';
import { TipoPago } from './models/tipopago.model';
import { TipopagosService } from './services/tipopagos.service';
import { Subtipo } from './models/subtipo.model';
import { SubtiposService } from './services/subtipos.service';
import { ClientesService } from './services/clientes.service';
import { ProveedoresService } from './services/proveedores.service';
import { Cliente } from './models/cliente.model';
import { Proveedor } from './models/proveedor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private monedas:Moneda[] = [
    {
      id: 0,
      descripcion: "USD",
      cotizacion: 56.4
    },
    {
      id: 0,
      descripcion: "EUR",
      cotizacion: 60.6
    },
    {
      id: 0,
      descripcion: "ARS",
      cotizacion: 1
    },
    {
      id: 0,
      descripcion: "MXN",
      cotizacion: 2.2
    }
  ];

  private tipopagos:TipoPago[] = [
    {
      id: 0,
      descripcion: "Efectivo"
    },
    {
      id: 0,
      descripcion: "Crédito"
    },
    {
      id: 0,
      descripcion: "Débito"
    }
  ];

  private subtipos:Subtipo[] = [
    {
      id: 0,
      descripcion: "Farmacia"
    },
    {
      id: 0,
      descripcion: "Verdulería"
    },
    {
      id: 0,
      descripcion: "Panadería"
    },
    {
      id: 0,
      descripcion: "Supermercado"
    },
    {
      id: 0,
      descripcion: "Taller mecánico"
    },
  ];

  private clientes:Cliente[] = [
    {
      id: 0,
      nombre: "Juan",
      apellido: "Juarez",
      cuil: "20111111115",
      dni: "11111111",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Luis",
      apellido: "Lopez",
      cuil: "20111111125",
      dni: "11111111",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "María",
      apellido: "Martinez",
      cuil: "20111111135",
      dni: "11111111",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Beatriz",
      apellido: "Bazán",
      cuil: "20111111145",
      dni: "11111111",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Tomás",
      apellido: "Tineo",
      cuil: "20111111155",
      dni: "11111111",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    }
  ];

  private proveedores:Proveedor[] = [
    {
      id: 0,
      nombre: "Farmacia Pepito",
      cuit: "20111111115",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Mecanicos La Rioja",
      cuit: "20111111125",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Farmacity",
      cuit: "20111111135",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Verdulería Pedrito",
      cuit: "20111111145",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    },
    {
      id: 0,
      nombre: "Supermercado Juancito",
      cuit: "20111111155",
      telefono: "3804333333",
      direccion: "Calle Falsa 123",
      pais: "Argentina",
      provincia: "La Rioja",
      ciudad: "La Rioja"
    }
  ];

  constructor(private monedasService:MonedasService,
              private tipoPagosService:TipopagosService,
              private subtiposService:SubtiposService,
              private clientesService:ClientesService,
              private proveedoresService:ProveedoresService) {}

  ngOnInit() {

    this.monedasService.getMonedas().subscribe(r => {
      if (r.length == 0) {
        this.monedasService.addMonedas(this.monedas).subscribe(response => {
          console.log(response);
        });
      }
    });

    this.tipoPagosService.getTipoPagos().subscribe(r => {
      if (r.length == 0) {
        this.tipoPagosService.addTipoPagos(this.tipopagos).subscribe(response => {
          console.log(response);
        });
      }
    });

    this.subtiposService.getSubtipos().subscribe(r => {
      if (r.length == 0) {
        this.subtiposService.addSubtipos(this.subtipos).subscribe(response => {
          console.log(response);
        });
      }
    });
  
    this.clientesService.getClientes().subscribe(r => {
      if (r.length == 0) {
        this.clientesService.addClientes(this.clientes).subscribe(response => {
          console.log(response);
        });
      }
    });

    this.proveedoresService.getProveedores().subscribe(r => {
      if (r.length == 0) {
        this.proveedoresService.addProveedores(this.proveedores).subscribe(response => {
          console.log(response);
        });
      }
    });

  }
}
