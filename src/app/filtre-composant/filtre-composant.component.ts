import { Component } from '@angular/core';

@Component({
  selector: 'app-filtre-composant',
  templateUrl: './filtre-composant.component.html',
  styleUrl: './filtre-composant.component.css'
})
export class FiltreComposantComponent {
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;

  showFilterMenu: boolean = false;

  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }

  hideFilterMenu() {
    this.showFilterMenu = false;
  }

}
