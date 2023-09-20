import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperadminOrderplaceMerchantComponent } from './supperadmin-orderplace-merchant.component';

describe('SupperadminOrderplaceMerchantComponent', () => {
  let component: SupperadminOrderplaceMerchantComponent;
  let fixture: ComponentFixture<SupperadminOrderplaceMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupperadminOrderplaceMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupperadminOrderplaceMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
