import { TestBed } from '@angular/core/testing';

import { EstatisticasCategoriasService } from './estatisticas-categorias.service';

describe('EstatisticasCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstatisticasCategoriasService = TestBed.get(EstatisticasCategoriasService);
    expect(service).toBeTruthy();
  });
});
