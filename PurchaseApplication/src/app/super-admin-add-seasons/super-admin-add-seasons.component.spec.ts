import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminAddSeasonsComponent } from './super-admin-add-seasons.component';

describe('SuperAdminAddSeasonsComponent', () => {
  let component: SuperAdminAddSeasonsComponent;
  let fixture: ComponentFixture<SuperAdminAddSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminAddSeasonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminAddSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
