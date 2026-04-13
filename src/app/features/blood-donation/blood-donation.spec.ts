import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonation } from './blood-donation';

describe('BloodDonation', () => {
  let component: BloodDonation;
  let fixture: ComponentFixture<BloodDonation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodDonation],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodDonation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
