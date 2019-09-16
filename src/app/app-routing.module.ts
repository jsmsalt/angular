import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MonedasComponent } from './components/pages/monedas/monedas.component';
import { MovimientosComponent } from './components/pages/movimientos/movimientos.component';
import { TipopagosComponent } from './components/pages/tipopagos/tipopagos.component';
import { SubtiposComponent } from './components/pages/subtipos/subtipos.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { ClientesComponent } from './components/pages/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'monedas', component: MonedasComponent },
  { path: 'movimientos/:id', component: MovimientosComponent },
  { path: 'movimientos', component: MovimientosComponent },
  { path: 'pagos', component: TipopagosComponent },
  { path: 'subtipos', component: SubtiposComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }