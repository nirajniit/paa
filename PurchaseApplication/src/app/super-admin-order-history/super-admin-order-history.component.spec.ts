import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrderHistoryComponent } from './super-admin-order-history.component';

describe('SuperAdminOrderHistoryComponent', () => {
  let component: SuperAdminOrderHistoryComponent;
  let fixture: ComponentFixture<SuperAdminOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminOrderHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
