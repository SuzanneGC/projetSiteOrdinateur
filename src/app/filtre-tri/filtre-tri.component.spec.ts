import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreTriComponent } from './filtre-tri.component';

describe('FiltreTriComponent', () => {
  let component: FiltreTriComponent;
  let fixture: ComponentFixture<FiltreTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltreTriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltreTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
