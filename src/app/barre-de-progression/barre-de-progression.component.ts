import { Component,OnInit, OnDestroy} from '@angular/core';
import { majPourcentage } from '../maj-pourcentage.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-barre-de-progression',
  templateUrl: './barre-de-progression.component.html',
  styleUrl: './barre-de-progression.component.css'
})
export class BarreDeProgressionComponent {
  pourcentage: number = 0 ;
  pourcentageSubscription: Subscription = new Subscription();

  constructor(private majPourcentageService : majPourcentage){    
  }

  ngOnInit() {
    this.pourcentageSubscription = this.majPourcentageService.pourcentage$.subscribe(pourcentage => {
      this.pourcentage = pourcentage;
    });
  }

  ngOnDestroy() {
    this.pourcentageSubscription.unsubscribe();
  }
  
  getColor(pourcentage: number): string {
    const red = Math.round((100 - pourcentage) * 255 / 100);
    const green = Math.round(pourcentage * 255 / 100);
    return `rgb(${red}, ${green}, 0)`;
  }
}
