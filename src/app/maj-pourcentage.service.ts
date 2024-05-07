// progression.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class majPourcentage {
  private pourcentageSource = new Subject<number>();
  pourcentage$ = this.pourcentageSource.asObservable();

  constructor() {}

  mettreAJourPourcentage(nouveauPourcentage: number) {
    this.pourcentageSource.next(nouveauPourcentage);
    }
  
  getPourcentage(): Observable<number> {
      return this.pourcentage$;
    }

}
