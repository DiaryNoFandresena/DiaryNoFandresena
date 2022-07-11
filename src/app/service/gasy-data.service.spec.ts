import { TestBed } from '@angular/core/testing';

import { GasyDataService } from './gasy-data.service';

describe('GasyDataService', () => {
  let service: GasyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
