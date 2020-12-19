import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmImagensComponent } from './adm-imagens.component';

describe('AdmImagensComponent', () => {
  let component: AdmImagensComponent;
  let fixture: ComponentFixture<AdmImagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmImagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
