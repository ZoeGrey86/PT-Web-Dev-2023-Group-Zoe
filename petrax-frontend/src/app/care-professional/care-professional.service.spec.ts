import { TestBed } from '@angular/core/testing';

import { CareProfessionalService } from './care-professional.service';

describe('CareProfessionalService', () => {
  let service: CareProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
