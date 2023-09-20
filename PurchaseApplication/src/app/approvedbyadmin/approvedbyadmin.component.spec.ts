import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedbyadminComponent } from './approvedbyadmin.component';

describe('ApprovedbyadminComponent', () => {
  let component: ApprovedbyadminComponent;
  let fixture: ComponentFixture<ApprovedbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
