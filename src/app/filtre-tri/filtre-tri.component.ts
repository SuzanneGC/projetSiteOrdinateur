import { Component } from '@angular/core';

@Component({
  selector: 'app-filtre-tri',
  templateUrl: './filtre-tri.component.html',
  styleUrl: './filtre-tri.component.css'
})
export class FiltreTriComponent {
  options = ['Trier par prix croissant', 'Trier par prix décroissant', 'Trier par ordre alphabétique', 'Trier par popularité'];
  selectedOption: string = '';
}
