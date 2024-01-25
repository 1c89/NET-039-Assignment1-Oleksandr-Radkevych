/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutDataService } from './layoutdata.service';

describe('Service: Struture', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutDataService]
    });
  });

  it('should ...', inject([LayoutDataService], (service: LayoutDataService) => {
    expect(service).toBeTruthy();
  }));
});
