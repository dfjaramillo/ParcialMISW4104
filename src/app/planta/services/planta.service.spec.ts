/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlantaService } from './planta.service';

describe('Service: Planta', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantaService],
      imports:[HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create the service', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
