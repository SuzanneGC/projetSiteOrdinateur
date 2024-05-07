import { TestBed } from '@angular/core/testing';
import { majPourcentage } from './maj-pourcentage.service'; // Mettez à jour l'importation

describe('MajPourcentageService', () => {
  let service: majPourcentage; // Mettez à jour le type

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(majPourcentage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});