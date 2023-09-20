import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPaymentReportdateComponent } from './superadmin-payment-reportdate.component';

describe('SuperadminPaymentReportdateComponent', () => {
  let component: SuperadminPaymentReportdateComponent;
  let fixture: ComponentFixture<SuperadminPaymentReportdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminPaymentReportdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminPaymentReportdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
