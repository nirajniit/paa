import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingSizeComponent } from './superadmin-setting-size.component';

describe('SuperadminSettingSizeComponent', () => {
  let component: SuperadminSettingSizeComponent;
  let fixture: ComponentFixture<SuperadminSettingSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminSettingSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSettingSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
