import { TestBed } from '@angular/core/testing';

import { BecomesellerService } from './becomeseller.service';

describe('BecomesellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BecomesellerService = TestBed.get(BecomesellerService);
    expect(service).toBeTruthy();
  });
});
