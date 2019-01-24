import { TestBed } from '@angular/core/testing';

import { AddHijoService } from './add-hijo.service';

describe('AddHijoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHijoService = TestBed.get(AddHijoService);
    expect(service).toBeTruthy();
  });
});
