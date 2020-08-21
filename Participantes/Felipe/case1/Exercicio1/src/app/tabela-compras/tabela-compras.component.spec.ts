import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComprasComponent } from './tabela-compras.component';

describe('TabelaComprasComponent', () => {
  let component: TabelaComprasComponent;
  let fixture: ComponentFixture<TabelaComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
