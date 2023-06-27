import { TestBed } from '@angular/core/testing';

import { DataproyectosService } from './dataproyectos.service';

describe('DataproyectosService', () => {
  let service: DataproyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
