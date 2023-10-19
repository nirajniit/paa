import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminRepeatOrder2Component } from './super-admin-repeat-order2.component';

describe('SuperAdminRepeatOrder2Component', () => {
  let component: SuperAdminRepeatOrder2Component;
  let fixture: ComponentFixture<SuperAdminRepeatOrder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminRepeatOrder2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminRepeatOrder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
