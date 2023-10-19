import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperorderComponent } from './superorder.component';

describe('SuperorderComponent', () => {
  let component: SuperorderComponent;
  let fixture: ComponentFixture<SuperorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
