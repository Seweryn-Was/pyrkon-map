import { TestBed } from '@angular/core/testing';

import { InsideMapService } from './inside-map-service.service';

describe('InsideMapService', () => {
  let service: InsideMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsideMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
