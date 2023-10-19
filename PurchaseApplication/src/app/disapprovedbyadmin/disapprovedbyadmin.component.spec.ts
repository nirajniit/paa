import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovedbyadminComponent } from './disapprovedbyadmin.component';

describe('DisapprovedbyadminComponent', () => {
  let component: DisapprovedbyadminComponent;
  let fixture: ComponentFixture<DisapprovedbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisapprovedbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisapprovedbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
