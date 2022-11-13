import { TestBed } from '@angular/core/testing';

import { IssuedBooksService } from './issued-books.service';

describe('IssuedBooksService', () => {
  let service: IssuedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
