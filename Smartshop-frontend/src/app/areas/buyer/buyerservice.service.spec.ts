import { TestBed } from '@angular/core/testing';

import { BuyerserviceService } from './buyerservice.service';

describe('BuyerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerserviceService = TestBed.get(BuyerserviceService);
    expect(service).toBeTruthy();
  });
});
