/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GymService } from './gym.service';

describe('Service: Gym', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GymService]
    });
  });

  it('should ...', inject([GymService], (service: GymService) => {
    expect(service).toBeTruthy();
  }));
});
