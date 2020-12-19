import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentComponent } from './equipament.component';

describe('EquipamentComponent', () => {
  let component: EquipamentComponent;
  let fixture: ComponentFixture<EquipamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
