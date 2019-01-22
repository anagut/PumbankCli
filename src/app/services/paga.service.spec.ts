import { TestBed } from '@angular/core/testing';

import { PagaService } from './paga.service';

describe('PagaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagaService = TestBed.get(PagaService);
    expect(service).toBeTruthy();
  });
});
