import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasCategoriasComponent } from './estatisticas-categorias.component';

describe('EstatisticasCategoriasComponent', () => {
  let component: EstatisticasCategoriasComponent;
  let fixture: ComponentFixture<EstatisticasCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticasCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
