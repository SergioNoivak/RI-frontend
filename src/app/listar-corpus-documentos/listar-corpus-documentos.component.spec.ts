import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorpusDocumentosComponent } from './listar-corpus-documentos.component';

describe('ListarCorpusDocumentosComponent', () => {
  let component: ListarCorpusDocumentosComponent;
  let fixture: ComponentFixture<ListarCorpusDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCorpusDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCorpusDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
