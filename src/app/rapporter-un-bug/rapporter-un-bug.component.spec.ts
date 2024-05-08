import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapporterUnBugComponent } from './rapporter-un-bug.component';

describe('RapporterUnBugComponent', () => {
  let component: RapporterUnBugComponent;
  let fixture: ComponentFixture<RapporterUnBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RapporterUnBugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RapporterUnBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
