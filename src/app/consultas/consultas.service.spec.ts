import { TestBed } from '@angular/core/testing';

import { ConsultasService } from './consultas.service';

describe('ConsultasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultasService = TestBed.get(ConsultasService);
    expect(service).toBeTruthy();
  });
});
