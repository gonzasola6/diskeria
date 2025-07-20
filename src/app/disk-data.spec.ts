import { TestBed } from '@angular/core/testing';

import { DiskDataService } from './disk-data';

describe('DiskData', () => {
  let service: DiskDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiskDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
