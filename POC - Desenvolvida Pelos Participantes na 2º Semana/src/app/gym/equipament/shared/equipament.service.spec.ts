/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EquipamentService } from './equipament.service';

describe('Service: Equipament', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipamentService]
    });
  });

  it('should ...', inject([EquipamentService], (service: EquipamentService) => {
    expect(service).toBeTruthy();
  }));
});
