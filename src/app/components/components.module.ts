import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from './forms/forms.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    PagesModule,
    SharedModule,
    FormsModule
  ]
})
export class ComponentsModule { }
