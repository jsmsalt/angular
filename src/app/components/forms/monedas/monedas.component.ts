import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Moneda } from 'src/app/models/moneda.model';
import { MonedasService } from 'src/app/services/monedas.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-monedas',
  templateUrl: './monedas.component.html'
})
export class MonedasComponent implements OnInit {

  private moneda:Moneda;
  private mainForm:FormGroup;

  @Output() enviado:EventEmitter<Moneda>;

  constructor( private monedasService:MonedasService, private formBuilder:FormBuilder ) {
    this.enviado = new EventEmitter();
  }

  ngOnInit() {
      this.mainForm = this.formBuilder.group({
        descripcion: ['',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        cotizacion: ['',
          [
            Validators.required,
            Validators.min(0)
          ]
        ]
    });
  }

  get f() { return this.mainForm.controls; }

  onSubmit() {
    if (this.mainForm.invalid) {
      return;
    }
    this.moneda = this.mainForm.value;
    this.monedasService.addMoneda(this.moneda).subscribe((response) => {
      if (response && response.length == 1 && response[0] != null) {
        this.moneda = response[0];
        this.enviado.emit(this.moneda);
        this.onReset();
      }
    });
  }

  onReset() {
    this.mainForm.reset();
  }

}
