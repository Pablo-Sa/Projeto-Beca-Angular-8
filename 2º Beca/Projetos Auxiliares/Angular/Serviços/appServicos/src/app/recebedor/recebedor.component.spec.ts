import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebedorComponent } from './recebedor.component';

describe('RecebedorComponent', () => {
  let component: RecebedorComponent;
  let fixture: ComponentFixture<RecebedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
