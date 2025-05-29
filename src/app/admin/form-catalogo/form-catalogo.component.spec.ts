import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCatalogoComponent } from './form-catalogo.component';

describe('FormCatalogoComponent', () => {
  let component: FormCatalogoComponent;
  let fixture: ComponentFixture<FormCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCatalogoComponent]
    });
    fixture = TestBed.createComponent(FormCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
