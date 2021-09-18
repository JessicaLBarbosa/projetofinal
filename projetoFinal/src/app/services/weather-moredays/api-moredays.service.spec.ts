import { TestBed } from '@angular/core/testing';

import { ApiMoredaysService } from './api-moredays.service';

describe('ApiMoredaysService', () => {
  let service: ApiMoredaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMoredaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
