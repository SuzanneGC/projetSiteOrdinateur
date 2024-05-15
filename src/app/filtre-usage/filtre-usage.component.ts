import { Component } from '@angular/core';

@Component({
  selector: 'app-filtre-usage',
  templateUrl: './filtre-usage.component.html',
  styleUrl: './filtre-usage.component.css'
})
export class FiltreUsageComponent {
  options = ['Gaming ', 'Bureautique', 'Graphisme'];
  selectedOption: string = '';
  showFilterMenu: boolean = false;

  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }

  hideFilterMenu() {
    this.showFilterMenu = false;
  }
  
}
