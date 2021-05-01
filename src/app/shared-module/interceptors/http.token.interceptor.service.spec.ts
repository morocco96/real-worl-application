import { TestBed } from '@angular/core/testing';

import { Http.Token.InterceptorService } from './http.token.interceptor.service';

describe('Http.Token.InterceptorService', () => {
  let service: Http.Token.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Http.Token.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
