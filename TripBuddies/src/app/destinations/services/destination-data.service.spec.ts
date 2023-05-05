import { TestBed } from '@angular/core/testing';

import { DestinationDataService } from './destination-data.service';

describe('DestinationDataService', () => {
  let service: DestinationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
