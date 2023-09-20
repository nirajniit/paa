import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminEditProfileComponent } from './super-admin-edit-profile.component';

describe('SuperAdminEditProfileComponent', () => {
  let component: SuperAdminEditProfileComponent;
  let fixture: ComponentFixture<SuperAdminEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
