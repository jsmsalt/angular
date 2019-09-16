import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '../forms/forms.module';
import { MonedasComponent } from './monedas/monedas.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { TipopagosComponent } from './tipopagos/tipopagos.component';
import { SubtiposComponent } from './subtipos/subtipos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, MonedasComponent, MovimientosComponent, TipopagosComponent, SubtiposComponent, ClientesComponent, ProveedoresComponent],
  exports: [HomeComponent, MonedasComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
