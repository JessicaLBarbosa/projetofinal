import { TestBed } from '@angular/core/testing';

import { ApiRealtimeService } from './api-realtime.service';

describe('ApiRealtimeService', () => {
  let service: ApiRealtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRealtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
