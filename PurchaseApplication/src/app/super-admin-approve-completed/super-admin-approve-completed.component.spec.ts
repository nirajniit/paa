import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminApproveCompletedComponent } from './super-admin-approve-completed.component';

describe('SuperAdminApproveCompletedComponent', () => {
  let component: SuperAdminApproveCompletedComponent;
  let fixture: ComponentFixture<SuperAdminApproveCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminApproveCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminApproveCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
