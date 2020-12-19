import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasvindasComponent } from './boasvindas.component';

describe('BoasvindasComponent', () => {
  let component: BoasvindasComponent;
  let fixture: ComponentFixture<BoasvindasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoasvindasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoasvindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
