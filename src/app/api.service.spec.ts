import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
  });
});
