import { TestBed } from '@angular/core/testing';

import { ListarCorpusDocumentosService } from './listar-corpus-documentos.service';

describe('ListarCorpusDocumentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarCorpusDocumentosService = TestBed.get(ListarCorpusDocumentosService);
    expect(service).toBeTruthy();
  });
});
