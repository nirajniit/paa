import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperreapetComponent } from './superreapet.component';

describe('SuperreapetComponent', () => {
  let component: SuperreapetComponent;
  let fixture: ComponentFixture<SuperreapetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperreapetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperreapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
