/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SugestionService } from './sugestion.service';

describe('Service: Sugestion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SugestionService]
    });
  });

  it('should ...', inject([SugestionService], (service: SugestionService) => {
    expect(service).toBeTruthy();
  }));
});
