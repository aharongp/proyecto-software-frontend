import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponentClient } from './orders.component';

describe('OrdersComponentClient', () => {
  let component: OrdersComponentClient;
  let fixture: ComponentFixture<OrdersComponentClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponentClient]
    });
    fixture = TestBed.createComponent(OrdersComponentClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
