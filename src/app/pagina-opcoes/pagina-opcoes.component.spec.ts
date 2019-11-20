import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOpcoesComponent } from './pagina-opcoes.component';

describe('PaginaOpcoesComponent', () => {
  let component: PaginaOpcoesComponent;
  let fixture: ComponentFixture<PaginaOpcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaOpcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
