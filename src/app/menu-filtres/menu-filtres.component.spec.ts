import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFiltresComponent } from './menu-filtres.component';

describe('MenuFiltresComponent', () => {
  let component: MenuFiltresComponent;
  let fixture: ComponentFixture<MenuFiltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuFiltresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
