import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingCategoriesComponent } from './superadmin-setting-categories.component';

describe('SuperadminSettingCategoriesComponent', () => {
  let component: SuperadminSettingCategoriesComponent;
  let fixture: ComponentFixture<SuperadminSettingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminSettingCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSettingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
