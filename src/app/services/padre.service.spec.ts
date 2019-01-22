import { TestBed } from '@angular/core/testing';

import { PadreService } from './padre.service';

describe('PadreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PadreService = TestBed.get(PadreService);
    expect(service).toBeTruthy();
  });
});
