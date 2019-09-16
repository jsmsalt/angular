import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda.model';
import { MonedasService } from 'src/app/services/monedas.service';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html'
})
export class MonedasComponent implements OnInit {
  
  public monedas:Moneda[] = [];

  constructor(private monedasService:MonedasService) { }

  ngOnInit() {
    this.monedasService.getMonedas().subscribe((response) => {
      if (response && response.length > 0) {
        this.monedas = response;
      }
    });
  }

  nuevaMoneda(moneda:Moneda) {
    this.monedas.push(moneda);
    this.monedas = this.monedas.slice();
  }

}
