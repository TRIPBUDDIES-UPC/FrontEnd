import { TestBed } from '@angular/core/testing';

import { BussinessServicesService } from './bussiness-services.service';

describe('BussinessServicesService', () => {
  let service: BussinessServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussinessServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
