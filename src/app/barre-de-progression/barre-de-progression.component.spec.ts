import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDeProgressionComponent } from './barre-de-progression.component';

describe('BarreDeProgressionComponent', () => {
  let component: BarreDeProgressionComponent;
  let fixture: ComponentFixture<BarreDeProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarreDeProgressionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarreDeProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
