import { TestBed } from '@angular/core/testing';

import { Login.Service.TsService } from './login.service.ts.service';

describe('Login.Service.TsService', () => {
  let service: Login.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
