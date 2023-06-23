import { TestBed } from '@angular/core/testing';

import { BussinnessPlacesService } from './bussinness-places.service';

describe('BussinnessPlacesService', () => {
  let service: BussinnessPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussinnessPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
