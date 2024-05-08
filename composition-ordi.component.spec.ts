import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionOrdiComponent } from './composition-ordi.component';

describe('CompositionOrdiComponent', () => {
  let component: CompositionOrdiComponent;
  let fixture: ComponentFixture<CompositionOrdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompositionOrdiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompositionOrdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
