import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaProdutosComponent } from './adiciona-produtos.component';

describe('AdicionaProdutosComponent', () => {
  let component: AdicionaProdutosComponent;
  let fixture: ComponentFixture<AdicionaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
