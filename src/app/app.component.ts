import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetSiteOrdinateur';

  constructor(private router: Router) { }

  public navigateToQuestionnaire() {
    this.router.navigate(['/questionnaire']);
  }

  navigateToBugReport() {
    this.router.navigate(['/rapporter-un-bug']);
  }
}
