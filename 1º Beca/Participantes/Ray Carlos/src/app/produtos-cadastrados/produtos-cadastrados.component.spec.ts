import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCadastradosComponent } from './produtos-cadastrados.component';

describe('ProdutosCadastradosComponent', () => {
  let component: ProdutosCadastradosComponent;
  let fixture: ComponentFixture<ProdutosCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
