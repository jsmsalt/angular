import { Component, OnInit } from '@angular/core';
import { TipopagosService } from 'src/app/services/tipopagos.service';
import { TipoPago } from 'src/app/models/tipopago.model';

@Component({
  selector: 'app-tipopagos',
  templateUrl: './tipopagos.component.html'
})
export class TipopagosComponent implements OnInit {
  
  public tipos:TipoPago[] = [];

  constructor(private tipoPagosService:TipopagosService) { }

  ngOnInit() {
    this.tipoPagosService.getTipoPagos().subscribe((response) => {
      if (response && response.length > 0) {
        this.tipos = response;
      }
    });
  }

}
