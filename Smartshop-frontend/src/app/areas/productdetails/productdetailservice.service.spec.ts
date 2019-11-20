import { TestBed } from '@angular/core/testing';

import { ProductdetailserviceService } from './productdetailservice.service';

describe('ProductdetailserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductdetailserviceService = TestBed.get(ProductdetailserviceService);
    expect(service).toBeTruthy();
  });
});
