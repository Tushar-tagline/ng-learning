import { TestBed } from '@angular/core/testing';

import { FirstserviesService } from './firstservies.service';

describe('FirstserviesService', () => {
  let service: FirstserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
