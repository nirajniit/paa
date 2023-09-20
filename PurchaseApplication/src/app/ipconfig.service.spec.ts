import { TestBed } from '@angular/core/testing';

import { IPConfigService } from './ipconfig.service';

describe('IPConfigService', () => {
  let service: IPConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
