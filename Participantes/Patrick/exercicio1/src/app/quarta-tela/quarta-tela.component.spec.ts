import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaTelaComponent } from './quarta-tela.component';

describe('QuartaTelaComponent', () => {
  let component: QuartaTelaComponent;
  let fixture: ComponentFixture<QuartaTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartaTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartaTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
