import { TestBed, inject } from '@angular/core/testing';

import { CoininfoService } from './coininfo.service';

describe('CoininfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoininfoService]
    });
  });

  it('should be created', inject([CoininfoService], (service: CoininfoService) => {
    expect(service).toBeTruthy();
  }));
});
