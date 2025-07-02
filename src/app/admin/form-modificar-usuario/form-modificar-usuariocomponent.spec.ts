import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarUsuarioComponent } from './form-modificar-usuario.component';

describe('FormModificarUsuarioComponent', () => {
  let component: FormModificarUsuarioComponent;
  let fixture: ComponentFixture<FormModificarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormModificarUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormModificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
