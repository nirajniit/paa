import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminRepeatOrder1Component } from './superadmin-repeat-order1.component';

describe('SuperadminRepeatOrder1Component', () => {
  let component: SuperadminRepeatOrder1Component;
  let fixture: ComponentFixture<SuperadminRepeatOrder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminRepeatOrder1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminRepeatOrder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
