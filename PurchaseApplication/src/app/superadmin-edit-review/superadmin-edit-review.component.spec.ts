import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminEditReviewComponent } from './superadmin-edit-review.component';

describe('SuperadminEditReviewComponent', () => {
  let component: SuperadminEditReviewComponent;
  let fixture: ComponentFixture<SuperadminEditReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminEditReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminEditReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
