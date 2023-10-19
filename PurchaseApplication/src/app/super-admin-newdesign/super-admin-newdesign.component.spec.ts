import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminNewdesignComponent } from './super-admin-newdesign.component';

describe('SuperAdminNewdesignComponent', () => {
  let component: SuperAdminNewdesignComponent;
  let fixture: ComponentFixture<SuperAdminNewdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminNewdesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminNewdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
