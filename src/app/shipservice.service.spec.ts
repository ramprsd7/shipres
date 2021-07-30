import { TestBed } from '@angular/core/testing';

import { ShipserviceService } from './shipservice.service';

describe('ShipserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipserviceService = TestBed.get(ShipserviceService);
    expect(service).toBeTruthy();
  });
});
