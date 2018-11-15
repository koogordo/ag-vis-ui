import { TestBed } from '@angular/core/testing';

import { AuthBridgeService } from './auth-bridge.service';

describe('AuthBridgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthBridgeService = TestBed.get(AuthBridgeService);
    expect(service).toBeTruthy();
  });
});
