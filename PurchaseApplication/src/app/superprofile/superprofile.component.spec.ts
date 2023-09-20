import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperprofileComponent } from './superprofile.component';

describe('SuperprofileComponent', () => {
  let component: SuperprofileComponent;
  let fixture: ComponentFixture<SuperprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
