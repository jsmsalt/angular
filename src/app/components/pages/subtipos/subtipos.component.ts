import { Component, OnInit } from '@angular/core';
import { SubtiposService } from 'src/app/services/subtipos.service';
import { Subtipo } from 'src/app/models/subtipo.model';

@Component({
  selector: 'app-subtipos',
  templateUrl: './subtipos.component.html'
})
export class SubtiposComponent implements OnInit {

  public subtipos:Subtipo[] = [];
  
  constructor(private subtiposService:SubtiposService) { }

  ngOnInit() {
    this.subtiposService.getSubtipos().subscribe((response) => {
      if (response && response.length > 0) {
        this.subtipos = response;
      }
    });
  }
}
