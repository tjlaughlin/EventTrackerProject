import { TestBed } from '@angular/core/testing';

import { SciFiLibraryService } from './sci-fi-library.service';

describe('SciFiLibraryService', () => {
  let service: SciFiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SciFiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
