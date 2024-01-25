/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentDataService } from './contentdata.service';

describe('Service: Content', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentDataService]
    });
  });

  it('should ...', inject([ContentDataService], (service: ContentDataService) => {
    expect(service).toBeTruthy();
  }));
});
