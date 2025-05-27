import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavComponent } from './client-nav.component';

describe('ClientNavComponent', () => {
  let component: ClientNavComponent;
  let fixture: ComponentFixture<ClientNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientNavComponent]
    });
    fixture = TestBed.createComponent(ClientNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
