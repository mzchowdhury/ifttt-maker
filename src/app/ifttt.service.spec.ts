/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IftttService } from './ifttt.service';

describe('Service: Ifttt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IftttService]
    });
  });

  it('should ...', inject([IftttService], (service: IftttService) => {
    expect(service).toBeTruthy();
  }));
});
