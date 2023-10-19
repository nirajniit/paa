import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeateddetailsComponent } from './repeateddetails.component';

describe('RepeateddetailsComponent', () => {
  let component: RepeateddetailsComponent;
  let fixture: ComponentFixture<RepeateddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeateddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeateddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
