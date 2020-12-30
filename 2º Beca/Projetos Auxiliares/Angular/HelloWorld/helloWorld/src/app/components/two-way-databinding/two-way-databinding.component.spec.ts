import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatabindingComponent } from './two-way-databinding.component';

describe('TwoWayDatabindingComponent', () => {
  let component: TwoWayDatabindingComponent;
  let fixture: ComponentFixture<TwoWayDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
