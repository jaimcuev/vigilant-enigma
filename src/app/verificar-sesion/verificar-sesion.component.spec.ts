import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarSesionComponent } from './verificar-sesion.component';

describe('VerificarSesionComponent', () => {
  let component: VerificarSesionComponent;
  let fixture: ComponentFixture<VerificarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
