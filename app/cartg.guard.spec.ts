import { TestBed } from '@angular/core/testing';

import { CartgGuard } from './cartg.guard';

describe('CartgGuard', () => {
  let guard: CartgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CartgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
