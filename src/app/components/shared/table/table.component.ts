import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnChanges {

  @Input() data:any[] = [];
  @Input() fields:any[] = [];
  private keys:any[] = [];
  private values:any[] = [];
  private keyValues:any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    let data = changes.data.currentValue;
    
    let fields = {};
    if (changes.fields) {
      fields = changes.fields.currentValue;
    } else {
      fields = this.fields;
    }

    // Objetos a String
    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      let keys = Object.keys(row);
      for (let j = 0; j < keys.length; j++) {
        let key = keys[j];
        let value = data[i][key];
        if (typeof value == "object" && value != null) {
          let stringValue:string = "";
          if (fields.hasOwnProperty(key)) {
            for (let k = 0; k < fields[key].length; k++) {
              let field = fields[key][k];
              stringValue += data[i][key][field] + " ";
            }
          }
          data[i][key] = stringValue;
        } else if (value == null || value == "") {
          data[i][key] = "-";
        }
      }
    }

    this.keyValues = data;
    
    // if (data && data.length > 0) {
    //   this.keys = Object.keys(this.data[0]);

    //   this.values = [];
    //   for (let i = 0; i < this.data.length; i++) {
    //     let values = Object.values(this.data[i]);
    //     for (let j = 0; j < values.length; j++) {
    //       if (typeof values[j] == "object" && values[j] != null) {
    //         let v:string = "";
    //         if (fields.hasOwnProperty(this.keys[j])) {
    //           for (let k = 0; k < fields[this.keys[j]].length; k++) {
    //             let key = fields[this.keys[j]][k];
    //             v += values[j][key] + " ";
    //           }
    //         }
    //         values[j] = v;
    //       }
    //     }
    //     this.values.push(values);
    //   }
    // }
  }

}
