import { TestBed } from '@angular/core/testing';

import { DatablogService } from './datablog.service';

describe('DatablogService', () => {
  let service: DatablogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatablogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
