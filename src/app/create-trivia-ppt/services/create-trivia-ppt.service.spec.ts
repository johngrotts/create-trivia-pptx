import { TestBed } from '@angular/core/testing';

import { CreateTriviaPptService } from './create-trivia-ppt.service';

describe('CreateTriviaPptService', () => {
  let service: CreateTriviaPptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTriviaPptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
