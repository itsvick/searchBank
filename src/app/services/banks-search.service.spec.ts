import { TestBed } from '@angular/core/testing';

import { BanksSearchService } from './banks-search.service';

describe('BanksSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanksSearchService = TestBed.get(BanksSearchService);
    expect(service).toBeTruthy();
  });
});
