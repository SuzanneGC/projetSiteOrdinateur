import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rapporter-un-bug',
  templateUrl: './rapporter-un-bug.component.html',
  styleUrl: './rapporter-un-bug.component.css'
})
export class RapporterUnBugComponent {
  
  constructor(private router: Router) { }

  public navigateToHomePage() {
    this.router.navigate(['/home-page']);
  }
}

