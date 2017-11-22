/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthCenterService } from './health-center.service';

describe('HealthCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthCenterService]
    });
  });

  it('should ...', inject([HealthCenterService], (service: HealthCenterService) => {
    expect(service).toBeTruthy();
  }));
});
