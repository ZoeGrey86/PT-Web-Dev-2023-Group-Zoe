import { TestBed } from '@angular/core/testing';
import { PetProfileService } from './pet-profile.service';

describe('PetProfileService', () => {
  let service: PetProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
