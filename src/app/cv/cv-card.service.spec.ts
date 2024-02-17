import { TestBed } from '@angular/core/testing';

import { CvCardService } from './cv-card.service';

describe('CvCardService', () => {
  let service: CvCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
