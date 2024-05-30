import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginGuardNGuard } from './login-guard-n.guard';

describe('loginGuardNGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginGuardNGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
