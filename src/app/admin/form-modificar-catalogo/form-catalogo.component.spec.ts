import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarCatalogoComponent } from './form-catalogo.component';

describe('FormModificarCatalogoComponent', () => {
  let component: FormModificarCatalogoComponent;
  let fixture: ComponentFixture<FormModificarCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormModificarCatalogoComponent]
    });
    fixture = TestBed.createComponent(FormModificarCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
