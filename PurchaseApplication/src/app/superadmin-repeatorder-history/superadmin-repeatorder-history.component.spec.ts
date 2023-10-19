import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminRepeatorderHistoryComponent } from './superadmin-repeatorder-history.component';

describe('SuperadminRepeatorderHistoryComponent', () => {
  let component: SuperadminRepeatorderHistoryComponent;
  let fixture: ComponentFixture<SuperadminRepeatorderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminRepeatorderHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminRepeatorderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
