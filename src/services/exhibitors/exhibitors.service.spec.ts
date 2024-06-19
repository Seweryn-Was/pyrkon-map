import { TestBed } from '@angular/core/testing';

import { ExhibitorsService } from './exhibitors.service';

describe('ExhibitorsService', () => {
  let service: ExhibitorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
