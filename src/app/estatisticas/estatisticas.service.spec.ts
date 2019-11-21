import { TestBed } from '@angular/core/testing';

import { EstatisticasService } from './estatisticas.service';

describe('EstatisticasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstatisticasService = TestBed.get(EstatisticasService);
    expect(service).toBeTruthy();
  });
});
