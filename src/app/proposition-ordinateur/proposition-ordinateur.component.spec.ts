import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionOrdinateurComponent } from './proposition-ordinateur.component';

describe('PropositionOrdinateurComponent', () => {
  let component: PropositionOrdinateurComponent;
  let fixture: ComponentFixture<PropositionOrdinateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropositionOrdinateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropositionOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
