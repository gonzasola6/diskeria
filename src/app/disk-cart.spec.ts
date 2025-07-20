import { TestBed } from '@angular/core/testing';

import { DiskCartService } from './disk-cart';

describe('DiskCart', () => {
  let service: DiskCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiskCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
