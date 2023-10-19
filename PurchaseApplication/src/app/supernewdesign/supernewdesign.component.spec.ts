import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernewdesignComponent } from './supernewdesign.component';

describe('SupernewdesignComponent', () => {
  let component: SupernewdesignComponent;
  let fixture: ComponentFixture<SupernewdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupernewdesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupernewdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
