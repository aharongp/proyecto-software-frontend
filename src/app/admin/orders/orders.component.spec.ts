import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponentAdmin } from './orders.component';

describe('OrdersComponentAdmin', () => {
  let component: OrdersComponentAdmin;
  let fixture: ComponentFixture<OrdersComponentAdmin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponentAdmin]
    });
    fixture = TestBed.createComponent(OrdersComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
