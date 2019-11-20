import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoComponent } from './opcao.component';

describe('OpcaoComponent', () => {
  let component: OpcaoComponent;
  let fixture: ComponentFixture<OpcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
