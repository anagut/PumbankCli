import { TestBed } from '@angular/core/testing';

import { CongelarService } from './congelar.service';

describe('CongelarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongelarService = TestBed.get(CongelarService);
    expect(service).toBeTruthy();
  });
});
