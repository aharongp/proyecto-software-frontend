import { TestBed } from '@angular/core/testing';

import { AppSocketService } from './app.socket.service';

describe('AppSocketService', () => {
  let service: AppSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
