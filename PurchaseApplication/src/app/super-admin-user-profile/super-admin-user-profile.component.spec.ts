import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminUserProfileComponent } from './super-admin-user-profile.component';

describe('SuperAdminUserProfileComponent', () => {
  let component: SuperAdminUserProfileComponent;
  let fixture: ComponentFixture<SuperAdminUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
