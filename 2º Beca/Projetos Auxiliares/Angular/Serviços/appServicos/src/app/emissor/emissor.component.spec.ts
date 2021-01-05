import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissorComponent } from './emissor.component';

describe('EmissorComponent', () => {
  let component: EmissorComponent;
  let fixture: ComponentFixture<EmissorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
