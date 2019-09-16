import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public menuVisible = false;

  constructor() { }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
