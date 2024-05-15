import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreUsageComponent } from './filtre-usage.component';

describe('FiltreUsageComponent', () => {
  let component: FiltreUsageComponent;
  let fixture: ComponentFixture<FiltreUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltreUsageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltreUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
