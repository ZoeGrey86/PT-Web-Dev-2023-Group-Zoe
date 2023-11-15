import { TestBed } from '@angular/core/testing';

import { LogoutServiceService } from './logout-service.service';

describe('LogoutServiceService', () => {
  let service: LogoutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
