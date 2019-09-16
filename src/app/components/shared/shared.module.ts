import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [HeaderComponent, TableComponent],
  exports: [HeaderComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
