import { TestBed } from '@angular/core/testing';

import { VenderHeaderFooterService } from './vender-header-footer.service';

describe('VenderHeaderFooterService', () => {
  let service: VenderHeaderFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenderHeaderFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
