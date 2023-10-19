import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminTermandConditionComponent } from './superadmin-termand-condition.component';

describe('SuperadminTermandConditionComponent', () => {
  let component: SuperadminTermandConditionComponent;
  let fixture: ComponentFixture<SuperadminTermandConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminTermandConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminTermandConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
