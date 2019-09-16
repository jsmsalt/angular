import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movimiento } from 'src/app/models/movimiento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovimientosService } from 'src/app/services/movimientos.service';
import { MonedasService } from 'src/app/services/monedas.service';
import { Moneda } from 'src/app/models/moneda.model';
import { TipoPago } from 'src/app/models/tipopago.model';
import { TipopagosService } from 'src/app/services/tipopagos.service';
import { Subtipo } from 'src/app/models/subtipo.model';
import { SubtiposService } from 'src/app/services/subtipos.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'form-movimientos',
  templateUrl: './movimientos.component.html'
})
export class MovimientosComponent implements OnInit {
  
  private mainForm:FormGroup;
  public monedas:Moneda[] = [];
  public tipopagos:TipoPago[] = [];
  public subtipos:Subtipo[] = [];
  public proveedores:Proveedor[] = [];
  public clientes:Cliente[] = [];
  public tipo:number = 1;
  public persona:number = 1;

  @Output() enviado:EventEmitter<Movimiento>;

  constructor(private movimientosService:MovimientosService,
              private formBuilder:FormBuilder,
              private monedasService:MonedasService,
              private tipoPagosService:TipopagosService,
              private subtiposService:SubtiposService,
              private proveedoresService:ProveedoresService,
              private clientesService:ClientesService) {
    this.enviado = new EventEmitter();
  }

  ngOnInit() {
    let r = Validators.required;
    let min = Validators.min(0);

    this.mainForm = this.formBuilder.group({
      fecha: ['', [r]],
      fechaVencimiento: [''],
      monto: [0, [r, min]],
      descripcion: ['', [r]],
      tipoMovimiento: [1, [r]],
      subtipoMovimiento: [-1, min],
      moneda: [-1, [r, min]],
      tipoPago: [-1, [r, min]],
      cliente: [-1],
      proveedor: [-1]
    });

    this.monedasService.getMonedas().subscribe((response) => {
      if (response && response.length > 0) {
        this.monedas = response;
      }
    });

    this.tipoPagosService.getTipoPagos().subscribe((response) => {
      if (response && response.length > 0) {
        this.tipopagos = response;
      }
    });

    this.subtiposService.getSubtipos().subscribe((response) => {
      if (response && response.length > 0) {
        this.subtipos = response;
      }
    });

    this.proveedoresService.getProveedores().subscribe((response) => {
      if (response && response.length > 0) {
        this.proveedores = response;
      }
    });

    this.clientesService.getClientes().subscribe((response) => {
      if (response && response.length > 0) {
        this.clientes = response;
      }
    });
  }

  get f() { return this.mainForm.controls; }

  onChange() {
    if (this.persona == 1 && (this.mainForm.get("cliente").value == -1 || this.mainForm.get("cliente").value == null)) {
      this.mainForm.get("cliente").setErrors({ 'invalid': true });
    } else if (this.persona == 2 && (this.mainForm.get("proveedor").value == -1 || this.mainForm.get("proveedor").value == null)) {
      this.mainForm.get("proveedor").setErrors({ 'invalid': true });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.onChange();
    this.mainForm.markAllAsTouched();

    if (this.mainForm.invalid) {
      return;
    }

    let movimiento = {...this.mainForm.value};
    movimiento.fechaVencimiento = this.tipo == 1 ? "":movimiento.fechaVencimiento;
    movimiento.tipoMovimiento = parseInt(movimiento.tipoMovimiento);
    movimiento.monto = parseFloat(movimiento.monto);
    movimiento.cliente = this.persona == 1 ? {id: parseInt(movimiento.cliente)}:null;
    movimiento.proveedor = this.persona == 2 ? {id: parseInt(movimiento.proveedor)}:null;
    movimiento.moneda = {id: parseInt(movimiento.moneda)};
    movimiento.tipoPago = {id: parseInt(movimiento.tipoPago)};
    movimiento.subtipoMovimiento = {id: parseInt(movimiento.subtipoMovimiento)};
    movimiento = Object.assign(new Movimiento, movimiento);

    this.movimientosService.addMovimiento(movimiento).subscribe((response) => {
      if (response && response.length == 1 && response[0] != null) {
        this.enviado.emit(response[0]);
        this.onReset();
      }
    });
  }

  onReset() {
    this.mainForm.reset();
    this.mainForm.get('tipoMovimiento').setValue(1);
  }
}


