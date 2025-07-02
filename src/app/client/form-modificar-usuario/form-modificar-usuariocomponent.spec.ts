import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarUsuarioClientComponent } from './form-modificar-usuario.component';

describe('FormModificarUsuarioComponent', () => {
  let component: FormModificarUsuarioClientComponent;
  let fixture: ComponentFixture<FormModificarUsuarioClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormModificarUsuarioClientComponent]
    });
    fixture = TestBed.createComponent(FormModificarUsuarioClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
