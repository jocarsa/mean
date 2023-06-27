import { TestBed } from '@angular/core/testing';

import { DatasobremiService } from './datasobremi.service';

describe('DatasobremiService', () => {
  let service: DatasobremiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasobremiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
