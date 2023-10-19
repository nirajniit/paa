import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingBrandComponent } from './superadmin-setting-brand.component';

describe('SuperadminSettingBrandComponent', () => {
  let component: SuperadminSettingBrandComponent;
  let fixture: ComponentFixture<SuperadminSettingBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminSettingBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSettingBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
