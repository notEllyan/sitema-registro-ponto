import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmControlComponent } from './adm-control.component';

describe('AdmControlComponent', () => {
  let component: AdmControlComponent;
  let fixture: ComponentFixture<AdmControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmControlComponent]
    });
    fixture = TestBed.createComponent(AdmControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
