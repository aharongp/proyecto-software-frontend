import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProductComponent } from './services-product.component';

describe('ServicesProductComponent', () => {
  let component: ServicesProductComponent;
  let fixture: ComponentFixture<ServicesProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesProductComponent]
    });
    fixture = TestBed.createComponent(ServicesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
