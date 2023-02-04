import { TestBed } from '@angular/core/testing';

import { CollectedPokemonService } from './collected-pokemon.service';

describe('CollectedPokemonService', () => {
  let service: CollectedPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectedPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
