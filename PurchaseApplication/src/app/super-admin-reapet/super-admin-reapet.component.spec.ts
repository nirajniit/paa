import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminReapetComponent } from './super-admin-reapet.component';

describe('SuperAdminReapetComponent', () => {
  let component: SuperAdminReapetComponent;
  let fixture: ComponentFixture<SuperAdminReapetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminReapetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminReapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
