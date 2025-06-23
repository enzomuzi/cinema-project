import { TestBed } from '@angular/core/testing';

import { FilmesCartazService } from './filmes-cartaz.service';

describe('FilmesCartazService', () => {
  let service: FilmesCartazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesCartazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
