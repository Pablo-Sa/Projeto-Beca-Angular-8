import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCursosComponent } from './adicionar-cursos.component';

describe('AdicionarCursosComponent', () => {
  let component: AdicionarCursosComponent;
  let fixture: ComponentFixture<AdicionarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
