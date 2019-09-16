import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { MonedasComponent } from './monedas/monedas.component';
import { FormsModule as FormM, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovimientosComponent, MonedasComponent],
  exports: [MovimientosComponent, MonedasComponent],
  imports: [
    CommonModule,
    FormM,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
