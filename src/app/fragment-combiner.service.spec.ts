import { TestBed } from '@angular/core/testing';

import { FragmentCombinerService } from './fragment-combiner.service';

describe('FragmentCombinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FragmentCombinerService = TestBed.get(FragmentCombinerService);
    expect(service).toBeTruthy();
  });
});
