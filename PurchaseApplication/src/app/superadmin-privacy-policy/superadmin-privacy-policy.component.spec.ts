import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPrivacyPolicyComponent } from './superadmin-privacy-policy.component';

describe('SuperadminPrivacyPolicyComponent', () => {
  let component: SuperadminPrivacyPolicyComponent;
  let fixture: ComponentFixture<SuperadminPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminPrivacyPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
