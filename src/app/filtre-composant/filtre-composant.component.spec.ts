import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreComposantComponent } from './filtre-composant.component';

describe('FiltreComposantComponent', () => {
  let component: FiltreComposantComponent;
  let fixture: ComponentFixture<FiltreComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltreComposantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltreComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
