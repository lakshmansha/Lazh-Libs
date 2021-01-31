import { TestBed } from '@angular/core/testing';

import { LazhCryptoService } from './lazh-crypto.service';

describe('LazhCryptoService', () => {
  let service: LazhCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazhCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
