import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingGenderComponent } from './superadmin-setting-gender.component';

describe('SuperadminSettingGenderComponent', () => {
  let component: SuperadminSettingGenderComponent;
  let fixture: ComponentFixture<SuperadminSettingGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminSettingGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSettingGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
