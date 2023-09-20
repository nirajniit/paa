import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNewDesignComponent } from './vendor-new-design.component';

describe('VendorNewDesignComponent', () => {
  let component: VendorNewDesignComponent;
  let fixture: ComponentFixture<VendorNewDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorNewDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorNewDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



